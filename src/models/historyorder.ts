export interface Filter {
    SanGD?: string
    MaCK?: string
    TinhTrangLenh?: string
    DateForm?: string
    DateTo?: string
    SortBy?:string
  }
export interface HisOrder{
    AORDERID: number
    ATRANID: number
    ACLIENTCODE: string
    AQUANTITY: number
    ATRADEDQTY: number
    AREMAININGQTY: number
    AORDERSTATUS: string
    AORDERSTATUS_VN: string
    AERRORCODE: number
    AMODIFYQTY: number
    ADATETIME: string
    ALASTTRADEDTIME: any
    AEXCHANGEORDERNO: string
    AORDERTYPE: string
    AORDERTYPE_VN: string
    AORDERSESSION: string
    ACONTRACTNO: any
    ATRADINGACCOUNT: string
    ATRADINGACCOUNT_VN: string
    ASTOCKCODE: string
    APRICETYPE: string
    APRICE: string
    AEXCHANGE: string
    ABUYSELL: string
    APRODUCTTYPE: string
    AMARKETSEGMENT: string
    APLACEDBY: string
    AMESSAGE_VN: string
    AMESSAGE_EN: string
    ABACKUPDATE: string

}