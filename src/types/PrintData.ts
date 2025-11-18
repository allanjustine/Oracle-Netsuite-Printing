export interface PrintDataType {
  external_id: string;
  print_by: string | undefined;
  total_amount_due: number | undefined;
  customer?: string | undefined;
}
