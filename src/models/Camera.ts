// ========== PACKAGES ========== \\
import mongoose, {Schema} from "mongoose";

// ========== TYPES ========== \\
import type { ICamera } from "../interfaces/camera";

const CameraSchema: Schema = new Schema({
    brand: {type:String, required: true},
    model: {type:String, required: true}
})

const Camera = mongoose.model<ICamera>('Camera', CameraSchema);
export default Camera;