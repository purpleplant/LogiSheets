// DO NOT EDIT. CODE GENERATED BY gents.
import {CellId} from './cell_id'
import {Task} from './task'

export interface ActionEffect {
    sheets: readonly number[]
    asyncTasks: readonly Task[]
    dirtys: readonly (readonly [number, CellId])[]
}
