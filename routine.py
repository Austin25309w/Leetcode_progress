import schedule
import time

def job():
    print("Austin")

# schedule.every(10).seconds.do(job)

# while True:
#     schedule.run_pending()
#     time.sleep(1)



# a = ['617-001', '2617-002', '2617-003']
# b = {}
# details = dict({'wo':d})

def sort_f039(a, b):
    c = a[0].split(",")
    c.sort()

    d = b[0].split(",")
    d.sort()

    r = list(set(c).difference(d))
    print(c)
    print('------------')
    print(d)
    print('-------')
    print(r)

    

f039 = ["PO,Spend_Category,Typ,Status,Vendor,Exp,Operation,WO,Project,Fixed_Asset_No,Fixed_Asset_Item,Qty,Price,Comments,Requisitioner,Approved_By,Issued,Requested,Confirmed,Revised,Received,Revised_Delay,Received_Delay,Cert,Cert_number,NCR,Modified,Modified_By,Invoice_Date,Invoice,Discrepancies,Invoice_Inaccuracy,Payment_Due_Date,Payment_Date,Reference_PO"]

f039_truth = ["PO,Exp,Status,Operation,Vendor,WO,Project,Qty,Price,Delivered,Requested,Confirmed,Revised,Revised_Delay,Received,Received_Delay,Cert,Cert_number,NCR,Invoice_Inaccuracy,Invoice_Discrepancies,Comments,Invoice_Date,Payment_Due_Date,Payment_Date,Modified,Modified_By,Reference_PO,Item_Type,Path"]

f039loop = ["PO,Exp,Status,Vendor,Operation,WO,Project,Qty,Price,Comments,Requisitioner,Approved_By,Issued,Requested,Confirmed,Revised,Revised_Delay,Received,Received_Delay,Cert,Cert_number,NCR_number,Modified,Modified_By,Invoice_Date,Invoice_Discrepancies,Invoice_Inaccuracy,Payment_Due_Date,Payment_Date,Reference_PO,Item_Type,Path"]
f039OOPS = ["PO#	Exp	Status	Operation	Vendor	WO#	Project	Qty	Price	Delivered	Requested	Confirmed	Revised	Revised Delay	Received	Received Delay	Cert	Cert #	NCR#	Invoice Inaccuracy	Invoice Discrepancies	Comments	Invoice Date	Payment Due Date	Payment Date	Modified	Modified By	Reference PO	Item Type	Path"]
sort_f039(f039loop, f039_truth)