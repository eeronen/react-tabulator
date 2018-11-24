// TODO: add proper types for props & callbacks
type IRow = any;
type ICell = any;
type IColumn = any;
interface IFilter {
  field: string;
  type: "=" | "!=" | "like" | "<" |"<=" | ">" | ">=" | "in" |"regex";
  value: any;
}
type ISorter = any;
type IGroup = any;
type ITable = any;
type IValidators = any;

export interface IProps {
  className?: string;
  columns: any[];
  data: any[];
  height?: number;
  layout?: "fitColumns" | "fitData" | "fitDataFill", /// layout type "fitColumns" | "fitData" - default: "fitData"
	layoutColumnsOnNewData?: boolean, // update column widths on setData - default: false
	columnMinWidth?: number, // minimum global width for a column - default: 40
	columnVertAlign?: string, // vertical alignment of column headers - default: 'top'
	resizableColumns?: boolean, // resizable columns - default: true
	resizableRows?: boolean, // resizable rows - default: false
	autoResize?: boolean, // auto resize table - default: true
	tooltips?: boolean, // Tool tip value - default: false
	tooltipsHeader?: boolean, // Tool tip for headers - default: false
	tooltipGenerationMode?: string, // when to generate tooltips - default: 'load'
	initialSort?: boolean, // initial sorting criteria - default: false
	initialFilter?: boolean, // initial filtering criteria - default: false
	footerElement?: any, // hold footer element - default: false
	index?: string, // filed for row index - default: 'id'
	keybindings?:[], // array for keybindings - default: []
	clipboard?: boolean, // enable clipboard - default: false
	clipboardCopyStyled?: boolean, // formatted table data - default: true
	clipboardCopySelector?: string, // method of chosing which data is coppied to the clipboard - default: 'active'
	clipboardCopyFormatter?: string, // convert data to a clipboard string - default: 'table'
	clipboardCopyHeader?: boolean, // include table headers in copt - default: true
	clipboardPasteParser?: string, // convert pasted clipboard data to rows - default: 'table'
	clipboardPasteAction?: string, // how to insert pasted data into the table - default: 'insert'
  rowClick?: (e: any, row: IRow) => void;
  tableBuilding?: () => void;
  tableBuilt?: () => void;
  rowDblClick?: (e: any, row: IRow) => void;
  rowContext?: (e: any, row: IRow) => void;
  rowTap?: (e: any, row: IRow) => void;
  rowDblTap?: (e: any, row: IRow) => void;
  rowTapHold?: (e: any, row: IRow) => void;
  rowAdded?: (row: IRow) => void;
  rowDeleted?: (row: IRow) => void;
  rowMoved?: (row: IRow) => void;
  rowUpdated?: (row: IRow) => void;
  rowSelectionChanged?: (data: any[], rows: IRow[]) => void;
  rowSelected?: (row: IRow) => void;
  rowDeselected?: (row: IRow) => void;
  rowResized?: (row: IRow) => void;
  cellClick?: (e: any, cell: ICell) => void;
  cellDblClick?: (e: any, cell: ICell) => void;
  cellContext?: (e: any, cell: ICell) => void;
  cellTap?: (e: any, cell: ICell) => void;
  cellDblTap?: (e: any, cell: ICell) => void;
  cellTapHold?: (e: any, cell: ICell) => void;
  cellEditing?: (cell: ICell) => void;
  cellEdited?: (cell: ICell) => void;
  cellEditCancelled?: (cell: ICell) => void;
  columnMoved?: (column: IColumn, columns: IColumn[]) => void;
  columnResized?: (column: IColumn) => void;
  columnTitleChanged?: (column: IColumn) => void;
  columnVisibilityChanged?: (column: IColumn, visible: boolean) => void;
  headerClick?: (e:any, column: IColumn) => void;
  headerDblClick?: (e:any, column: IColumn) => void;
  headerContext?: (e:any, column: IColumn) => void;
  headerTap?: (e:any, column: IColumn) => void;
  headerDblTap?: (e:any, column: IColumn) => void;
  headerTapHold?: (e:any, column: IColumn) => void;
  htmlImporting?: () => void;
  htmlImported?: () => void;
  dataLoading?: (data: any) => void;
  dataLoaded?: any;
  dataEdited?: (data: any) => void;
  ajaxRequesting?: (url: string, params: any) => void;
  ajaxResponse?: (url: string, params: any, response: any) => any;
  ajaxError?: (xhr: any, textStatus: string, errorThrown: string) => void;
  dataFiltering?: (filters: IFilter[]) => void;
  dataFiltered?: (filters: IFilter[], rows: IRow[]) => void;
  dataSorting?: (sorters: ISorter[]) => void;
  dataSorted?: (sorters: ISorter[], rows: IRow[]) => void;
  renderStarted?: () => void;
  renderComplete?: () => void;
  pageLoaded?: (pageno: number) => void;
  localized?: (locale: string, lang: any) => void;
  dataGrouping?: () => void;
  dataGrouped?: (groups: IGroup[]) => void;
  groupVisibilityChanged?: (group: IGroup, visible: boolean) => void;
  groupClick?: (e: any, group: IGroup) => void;
  groupDblClick?: (e: any, group: IGroup) => void;
  groupContext?: (e: any, group: IGroup) => void;
  groupTap?: (e: any, group: IGroup) => void;
  groupDblTap?: (e: any, group: IGroup) => void;
  groupTapHold?: (e: any, group: IGroup) => void;
  movableRowsSendingStart?: (toTables: ITable[]) => void;
  movableRowsSent?: (fromRow: IRow, toRow: IRow, toTable: ITable) => void;
  movableRowsSentFailed?: (fromRow: IRow, toRow: IRow, toTable: ITable) => void;
  movableRowsSendingStop?: (toTables: ITable[]) => void;
  movableRowsReceivingStart?: (fromRow: IRow, fromTable: ITable) => void;
  movableRowsReceived?: (fromRow: IRow, toRow: IRow, fromTable: ITable) => void;
  movableRowsReceivedFailed?: (fromRow: IRow, toRow: IRow, fromTable: ITable) => void;
  movableRowsReceivingStop?: (fromTable: ITable) => void;
  validationFailed?: (cell: ICell, value: any, validators: IValidators) => void;
  clipboardCopied?: (clipboard: string) => void;
  clipboardPasted?: (clipboard: string, rowData: any, rows: IRow[]) =>void;
  clipboardPasteError?: (clipboard: string) => void;
  downloadDataFormatter?: (data: any) => any;
  downloadReady?: (fileContents: any, blob: any) => any;
  downloadComplete?: () => void;
  options?: any; // Tabulator options object
}
