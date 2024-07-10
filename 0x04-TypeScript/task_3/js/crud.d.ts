import { RowId, RowElement } from './interface';

export function insertRow(row: RowElement): number

export function updateRow(newRowId: number, updatedRow: RowElement)

export function deleteRow(rowId: RowId): void;

