// ========== PACKAGES ========== \\
import * as Hapi from '@hapi/hapi';

// ========== MODELS & INTERFACES ========== \\
import BurglarAlarm from '../models/BurglarAlarm';
import type { IBurglarAlarm } from '../interfaces/burglarAlarm';

const burglarAlarmRoutes: Hapi.ServerRoute[] = [
  {
    method: 'GET',
    path: '/burglar-alarms',
    handler: async (request: Hapi.Request, h: Hapi.ResponseToolkit) => {
      const alarms = await BurglarAlarm.find();
      return h.response(alarms).code(200);
    },
  },
  {
    method: 'POST',
    path: '/burglar-alarms',
    handler: async (request: Hapi.Request, h: Hapi.ResponseToolkit) => {
      const { brand, model } = request.payload as IBurglarAlarm;
      const alarm = new BurglarAlarm({ brand, model });
      await alarm.save();
      return h.response(alarm).code(201);
    },
  },
  {
    method: 'GET',
    path: '/burglar-alarms/{id}',
    handler: async (request: Hapi.Request, h: Hapi.ResponseToolkit) => {
      const { id } = request.params;
      const alarm = await BurglarAlarm.findById(id);
      if (!alarm) {
        return h.response({ message: 'Burglar Alarm not found' }).code(404);
      }
      return h.response(alarm).code(200);
    },
  },
  {
    method: 'DELETE',
    path: '/burglar-alarms/{id}',
    handler: async (request: Hapi.Request, h: Hapi.ResponseToolkit) => {
      const { id } = request.params;
      const result = await BurglarAlarm.findByIdAndDelete(id);
      if (!result) {
        return h.response({ message: 'Burglar Alarm not found' }).code(404);
      }
      return h.response({ message: 'Burglar Alarm deleted' }).code(200);
    },
  },
];

export default burglarAlarmRoutes;
