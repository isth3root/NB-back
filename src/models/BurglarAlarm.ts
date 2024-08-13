// ========== PACKAGES ========== \\
import mongoose, {Schema} from "mongoose";

// ========== TYPES ========== \\
import type { IBurglarAlarm } from "../interfaces/burglarAlarm";

const BurglarAlarmSchema: Schema = new Schema({
    brand: {type:String, required: true},
    model: {type:String, required: true}
})

const BurglarAlarm = mongoose.model<IBurglarAlarm>('BurglarAlarm', BurglarAlarmSchema);
export default BurglarAlarm;