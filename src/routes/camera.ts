// ========== PACKAGES ========== \\
import * as Hapi from '@hapi/hapi'

// ========== MODELS & INTERFACES ========== \\
import Camera from '../models/Camera'
import type { ICamera } from '../interfaces/camera'

const cameraRoutes: Hapi.ServerRoute[] = [
    {
        method: 'GET',
        path: '/cameras',
        handler: async (request: Hapi.Request, h: Hapi.ResponseToolkit) => {
            const cameras = await Camera.find();
            return h.response(cameras).code(200);
        },
    },
    {
        method: 'POST',
        path: '/cameras',
        handler: async (request: Hapi.Request, h: Hapi.ResponseToolkit) => {
          const { brand, model } = request.payload as ICamera;
          const camera = new Camera({ brand, model });
          await camera.save();
          return h.response(camera).code(201);
        },
    },
    {
        method: 'GET',
        path: '/cameras/{id}',
        handler: async (request: Hapi.Request, h: Hapi.ResponseToolkit) => {
          const { id } = request.params;
          const camera = await Camera.findById(id);
          if (!camera) {
            return h.response({ message: 'Camera not found' }).code(404);
          }
          return h.response(camera).code(200);
        },
    },
    {
        method: 'DELETE',
        path: '/cameras/{id}',
        handler: async (request: Hapi.Request, h: Hapi.ResponseToolkit) => {
          const { id } = request.params;
          const result = await Camera.findByIdAndDelete(id);
          if (!result) {
            return h.response({ message: 'Camera not found' }).code(404);
          }
          return h.response({ message: 'Camera deleted' }).code(200);
        },
    },
];

export default cameraRoutes;