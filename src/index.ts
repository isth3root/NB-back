// ========== PACKAGES ========== \\
import * as Hapi from '@hapi/hapi'

// ========== DATABASE ========== \\
import connectDB from './db/mongoose'

// ========== ROUTES ========== \\
import cameraRoutes from './routes/camera'
import burglarAlarmRoutes from './routes/burglarAlarm'

import 'dotenv/config'

const init = async () => {
    const server: Hapi.Server = Hapi.server({
        port: 4000,
        host: `localhost`,
        routes: {
            cors: {
                origin: ['*']
            }
        }
    });

    await connectDB();

    server.route(cameraRoutes);
    server.route(burglarAlarmRoutes);

    await server.start();
    console.log(`Server is running on ${server.info.uri}`)
};

process.on('unhandledRejection', (error) => {
    console.log(error);
    process.exit(1);
});

init();