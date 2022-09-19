// DO NOT EDIT. CODE GENERATED BY gents.
import {SheetBlocks} from './sheet_blocks'
import {SheetColInfo} from './sheet_col_info'
import {SheetComments} from './sheet_comments'
import {SheetMergeCells} from './sheet_merge_cells'
import {SheetNames} from './sheet_names'
import {SheetRowInfo} from './sheet_row_info'
import {SheetStyles} from './sheet_styles'
import {SheetValues} from './sheet_values'

export type DisplayPatch =
    | {values: SheetValues}
    | {styles: SheetStyles}
    | {rowInfo: SheetRowInfo}
    | {colInfo: SheetColInfo}
    | {mergeCells: SheetMergeCells}
    | {comments: SheetComments}
    | {blocks: SheetBlocks}
    | {sheetNames: SheetNames}
