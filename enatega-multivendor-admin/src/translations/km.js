import { APP_NAME } from "../utils/constants"
import { toTitleCase } from "../utils/helper"

const km = {
  translation: {
    'Sign in credentials': 'ចូលព័ត៌មានអត្តសញ្ញាណ',
    'Sign in': 'ចូល',
    'Add Category': 'បន្ថែមប្រភេទ',
    Title: 'ចំណងជើង',
    Description: 'ការពិពណ៌នា',
    Add: 'បន្ថែម',
    Remove: 'យកចេញ',
    'Add/Remove': 'បន្ថែម / យកចេញ',
    Success: 'ជោគជ័យ',
    Danger: 'គ្រោះថ្នាក់',
    Categories: 'ប្រភេទ',
    Image: 'រូបភាព',
    Header: 'បឋមកថា',
    Loading: 'កំពុងផ្ទុក',
    Error: 'កំហុស',
    Edit: 'កែប្រែ',
    Delete: 'លុប',
    'Edit Category': 'កែសម្រួលប្រភេទ',
    Save: 'រក្សាទុក',
    'OrderID prefix': 'បុព្វបទ ID លំដាប់',
    Order: 'លំដាប់',
    Email: 'អ៊ីមែល',
    Password: 'ពាក្យសម្ងាត់',
    Enable: 'អនុញ្ញាត',
    Disable: 'បិទ',
    'Enable/Disable': 'អនុញ្ញាត / មិនអនុញ្ញាត',
    Saving: 'កំពុងរក្សាទុក',
    Paypal: 'Paypal',
    'Client ID': 'លេខសម្គាល់អតិថិជន',
    'Client Secret': 'អតិថិជនសម្ងាត់',
    Sandbox: 'Sandbox',
    'Publishable Key': 'កូនសៀវភៅបោះពុម្ព',
    'Secret Key': 'កូនសៀវភៅបោះពុម្ព',
    'Delivery Charges': 'ការដឹកជញ្ជូន',
    Price: 'តម្លៃ',
    'Add Food': 'បន្ថែមអាហារ',
    Category: 'ប្រភេទ',
    Select: 'ជ្រើសរើស',
    Variations: 'បំរែបំរួល',
    Type: 'វាយ',
    'Food Image': 'រូបភាពអាហារ',
    Foods: 'អាហារ',
    Actions: 'សកម្មភាព',
    'Edit Food': 'កែសម្រួលអាហារ',
    OrderID: 'លេខ​សម្គាល់​លំដាប់',
    Orders: 'ការបញ្ជាទិញ',
    Name: 'ឈ្មោះ',
    Items: 'ធាតុ',
    Payment: 'ការទូទាត់',
    Status: 'ស្ថានភាព',
    Review: 'ពិនិត្យឡើងវិញ',
    'Mark as': 'សម្គាល់ថា',
    Users: 'អ្នកប្រើ',
    Phone: 'ទូរស័ព្ទ',
    Address: 'អាសយដ្ឋាន',
    2019: 'ពីរ​ពាន់​ដប់​ប្រាំបួន',
    'About Us': 'អំពី​ពួក​យើង',
    Blog: 'កំណត់ហេតុបណ្ដាញ',
    Welcome: 'ស្វាគមន៍',
    Logout: 'ចាកចេញ',
    Dashboard: 'ផ្ទាំងគ្រប់គ្រង',
    Configuration: 'ការកំណត់​រចនាសម្ព័ន្ធ',
    Login: 'ចូល',
    Food: 'អាហារ',
    'Character limit of max length 50': 'ដែនកំណត់តួអក្សរនៃប្រវែងអតិបរមា 50',
    'Character limit of max length 15': 'ដែនកំណត់តួអក្សរនៃប្រវែងអតិបរមា 15',
    'Character limit of max length 60': 'ដែនកំណត់តួអក្សរនៃប្រវែងអតិបរមា 60',
    'Character limit of max length 20': 'ដែនកំណត់តួអក្សរនៃប្រវែងអតិបរមា 20',
    'Character limit of max length 140': 'ដែនកំណត់តួអក្សរនៃប្រវែងអតិបរមា 140',
    Currency: 'រូបិយប័ណ្ណ',
    Delivery: 'បញ្ជូន',
    'Currency Code': 'កូដរូបិយប័ណ្ណ',
    'Delivery Rate': 'អត្រាបញ្ជូន',
    'Currency Symbol': 'និមិត្តសញ្ញារូបិយប័ណ្ណ',
    enterYourDetailsBelow: 'បញ្ចូលពត៌មានរបស់អ្នកខាងក្រោម',
    LogintoEnatega: `ចូលទៅកាន់ ${toTitleCase(APP_NAME)}`,
    RememberMe: 'ចងចាំខ្ញុំ',
    ForgotYourPassword: 'ភ្លេចពាក្យសម្ងាត់របស់អ្នក?',
    errorWhileSaving: 'កំហុសបានកើតឡើងនៅពេលកំពុងរក្សាទុក, ព្យាយាមម្តងទៀត',
    Saved: 'បានរក្សាទុក',
    Addons: 'បន្ថែមមកកាន់',
    AddRemoveAddon: 'បន្ថែម ឬ ដកចេញសម្រាប់ Addon',
    MinQuantity: 'បរិមាណអប្បប',
    MinimumQuantity: 'បរិមាណអប្បបនៃអនុសាសន៍',
    MaxQuantity: 'បរិមាណអតិបរិមា',
    MaximumQuantity: 'បរិមាណអតិបរិមានៃអនុសាសន៍',
    Options: 'ជម្រើស',
    NewOption: 'ជម្រើសថ្មី',
    CategoryUpdatedSuccessfully: 'បានធ្វើបច្ចុប្បន្នភាពប្រភេទដោយជោគជ័យ',
    CategoryAddedSuccessfully: 'បានបន្ថែមប្រភេទដោយជោគជ័យ',
    ActionFailedTryAgain: 'សកម្មភាពបានបរាជ័យ។ សូមព្យាយាមម្តងទៀត',
    PHCategory: 'ប្រភេទ ឧ. ព៌សាប្រាំថ្ងៃ',
    ChooseCurrency: 'ជ្រើសរើសរូបិយប័ណ្ណ',
    ChooseSymbol: 'ជ្រើសរើសនិមិត្តសញ្ញារូបិយប័ណ្ណ',
    PHMail: 'ឧ. ស្មតស្រលាញ់@ឧ. គេហទំព័រ. លំអិត',
    EmailName: 'ឈ្មោះអ៊ីមែល',
    PHEnatega: 'ឧ. ស្មតហោះ',
    PHFood: 'ឧ. ស្មតម្ហូប',
    ClientSecretKey: 'សំងាត់អក្សរសុវត្ថិភាពអតិថិជន',
    Stripe: 'ស្ទ្រីព៍',
    PublishKey: 'កូនិស្តាកម្មសុវត្ថិភាព',
    CouponUpdated: 'បានធ្វើបច្ចុប្បន្នភាពគូប៉ុង',
    CouponAdded: 'បានបន្ថែមគូប៉ុង',
    Code: 'កូដ',
    PHCode: 'កូដ ឧ. គេហទំព័រ SALE50',
    PHDiscount: 'បញ្ចុះតម្លៃ % ឧ. ១-៩៩',
    FoodUpdatedSuccessfully: 'បានធ្វើបច្ចុប្បន្នភាពម្ហូប',
    FoodAddedSuccessfully: 'បានបន្ថែមម្ហូប',
    SelectCategory: 'ជ្រើសរើសប្រភេទ',
    UploadAnImage: 'ផ្ទុករូបភាព',
    UniqueTitle: 'ចំណងជើង (ត្រូវតែមានតែមួយ)',
    Discounted: 'បញ្ចុះតម្លៃ',
    LoadingDots: 'កំពុងផ្ទុក ...',
    ErrorDots: 'កំហុស ...',
    NewAddon: 'គ្រប់គ្រងធាតុបន្ថែមថ្មី',
    EnategaMultivendor: `${toTitleCase(APP_NAME)} ម៉ាល់ទ័រពុទ្ធកម្ម`,
    ResetPassword: 'កំណត់រង្វាន់ឡើងវិញ',
    EnategaDashboard: `ផ្ទៃតាប្រើប្រាស់ ${toTitleCase(APP_NAME)}`,
    UpdateOption: 'ធ្វើបច្ចុប្បន្នភាពជម្រើស',
    AddOption: 'បន្ថែមជម្រើស',
    OrderStatusUpdated: 'កំណត់ស្ថានភាពកម្មង់ទាន់សម័យ',
    SpecialInstructions: 'ការបញ្ជាក់ពិសេស',
    Charges: 'ថ្លៃដើម្បីប្រើ',
    Subtotal: 'សរុបរង',
    DeliveryFee: 'ថ្លៃបញ្ជូន',
    TaxCharges: 'ថ្លៃពន្ធបញ្ចូល',
    Tip: 'ប្រាក់ឥវ៉ាន់',
    Total: 'សរុប',
    PaymentMethod: 'វិធីសាស្រ្តទូទាត់',
    PaidAmount: 'ចំនួនទូទាត់',
    Accepted: 'បានទទួលយក',
    Accept: 'ទទួលយក',
    Cancelled: 'បានបោះបង់',
    Cancel: 'បោះបង់',
    PHReasonIfRejected: 'ហេតុសំខាន់ប្រសើរបើលទុកចោល',
    Datetime: 'ព័ត៌មានកាលបរិច្ឆេទ',
    PasswordChangedSuccessfully: 'ប្តូរលេខសម្ងាត់ដោយជោគជ័យ',
    ConfirmPassword: 'បញ្ជាក់ពាក្យសម្ងាត់',
    Reset: 'កំណត់ឡើងវិញ',
    RestaurantAdded: 'បានបន្ថែមភោជនីយដ្ឋាន',
    NetworkError: 'កំហុសបណ្តាញ',
    FieldsRequired: 'តម្រូវឱ្យបំពេញវាល',
    Username: 'ឈ្មោះអ្នកប្រើ',
    RestaurantUsername: 'ឈ្មោះអ្នកប្រើភោជនីយដ្ឋាន',
    RestaurantPassword: 'ពាក្យសម្ងាត់ភោជនីយដ្ឋាន',
    RestaurantName: 'ឈ្មោះភោជនីយដ្ឋាន',
    RestaurantAddress: 'អាសយដ្ឋានភោជនីយដ្ឋាន',
    DeliveryTime: 'ពេលវេលាដឹកជញ្ជូន',
    MinOrder: 'ការកម្មង់អបអរ',
    SalesTax: 'ពន្ធលក់',
    RiderUpdatedSuccessfully: 'ជូនដំណឹងតាមលំដាប់',
    RiderAddedSuccessfully: 'ជូនដំណឹងតាមលំដាប់បានបន្ថែមដោយជោគជ័យ',
    UsernameCannotBeBlank: 'ឈ្មោះអ្នកប្រើមិនអាចទទេបានទេ។',
    UsernameCannotContainSpaces: 'ឈ្មោះអ្នកប្រើមិនអាចមានដកឃ្លាបានទេ។',
    EditRider: 'កែប្រែជូនដំណឹង',
    AddRider: 'បន្ថែមជូនដំណឹង',
    Available: 'មាន',
    PHRiderName: 'ឈ្មោះជូនដំណឹង',
    Number: 'លេខ',
    PhoneNumber: 'លេខទូរស័ព្ទ',
    RiderZone: 'តំបន់ជូនដំណឹង',
    SectionUpdatedSuccessfully: 'កែប្រែបែបបទជំនាញដោយជោគជ័យ',
    SectionAddedSuccessfully: 'បានបន្ថែមបែបបទដោយជោគជ័យ',
    EditSection: 'កែប្រែបែបបទ',
    AddSection: 'បន្ថែមបែបបទ',
    SectionName: 'ឈ្មោះបែបបទ',
    Update: 'ធ្វើបច្ចុប្បន្នភាព',
    GENERAL: 'ទូទៅ',
    MANAGEMENT: 'គ្រប់គ្រង',
    RESTAURANT: 'ភោជនីយដ្ឋាន',
    BackToAdmin: 'ត្រឡប់ទៅកាន់អនុគមន៏',
    Search: 'ស្វែងរក',
    TippingUpdated: 'ការធ្វើដំណើរការទាមទារត្រូវបានធ្វើអោយទាន់សម័យ',
    EditTipping: 'កែប្រែការធ្វើដំណើរ',
    AddTipping: 'បន្ថែមការធ្វើដំណើរ',
    Tip1: 'ការធ្វើដំណើរ 1',
    Tip2: 'ការធ្វើដំណើរ 2',
    Tip3: 'ការធ្វើដំណើរ 3',
    PHTip1: 'ការធ្វើដំណើរ 1 ឧទាហរណ៍ 10',
    PHTip2: 'ការធ្វើដំណើរ 2 ឧទាហរណ៍ 20',
    PHTip3: 'ការធ្វើដំណើរ 3 ឧទាហរណ៍ 30',
    EditVendor: 'កែប្រែអ្នកលក់',
    AddVendor: 'បន្ថែមអ្នកលក់',
    PHNumber: 'ឧទាហរណ៍ 123',
    ZoneUpdatedSuccessfully: 'តំបន់ត្រូវបានធ្វើបច្ចុប្បន្នភាព',
    ZoneAddedSuccessfully: 'តំបន់បន្ថែមបានជោគជ័យ',
    SetZoneOnMap: 'ដាក់តំបន់នៅលើផែនទី',
    EditZone: 'កែប្រែតំបន់',
    AddZone: 'បន្ថែមតំបន់',
    Minimum: 'អប្បបរមា',
    Maximum: 'អតិបរមា',
    Action: 'សកម្មភាព',
    AvailableAfterPurchasing: 'លក់ពេលដែលបានទិញផលិតផល',
    CommissionRates: 'អត្រាការចំណាយ',
    PHCommission: 'អត្រាការចំណាយឧទាហរណ៍',
    Discount: 'បញ្ចុះតម្លៃ',
    Coupons: 'គូប៉ុង',
    StartDate: 'ថ្ងៃចាប់ផ្តើម',
    GraphFilter: 'ត្រង្គល់តុ',
    EndDate: 'ថ្ងៃបញ្ចប់',
    Apply: 'អនុវត្ត',
    UpdatingLocationError:
      'មានកំហុសពេលកំពុងធ្វើបច្ចុប្បន្នភាពទីតាំងនិងដែនតម្លៃ',
    LocationMarkerRequired: 'ត្រូវការសញ្ញាទីតាំង',
    DeliveryAreaRequired: 'ត្រូវការតំបន់ដឹកជញ្ជូន',
    LocationUpdatedSuccessfully:
      'ទីតាំងនិងដែនតម្លៃបានធ្វើបច្ចុប្បន្នភាពដោយជោគជ័យ',
    SetLocation: 'ដាក់ទីតាំង',
    DrawDeliveryBounds: 'គូរដែនដឹកជញ្ជូន',
    SetRestaurantLocation: 'ដាក់ទីតាំងហាងនៅលើផែនទី',
    RemoveDeliveryBounds: 'ដកដែនដឹកជញ្ជូន',
    RemoveRestaurantLocation: 'ដកទីតាំងហាង',
    Reject: 'បដិសេធទំនិញ',
    Delivered: 'បញ្ជូនរួច',
    OrderInformation: 'ព័ត៌មានការកុម្មង់',
    RestaurantCol: 'ហាងនៅលើផែនទី',
    Rider: 'អ្នកបើកបរ',
    OrderTime: 'ព័ត៌មានការកុម្មង់',
    Dispatch: 'បញ្ជូន',
    PasswordUpdated: 'ពាក្យសម្ងាត់បានធ្វើបច្ចុប្បន្នភាព',
    ForgotPassword: 'ភ្លេចពាក្យសម្ងាត់',
    NotificationSentAuccessfully: 'ការជូនដំណឹងបានបញ្ចូលដោយជោគជ័យ',
    Notifications: 'ការជូនដំណឹង',
    Body: 'តួនាទី',
    Zones: 'តំបន់',
    RequestID: 'សូមបញ្ជាក់លេខសម្គាល់',
    Amount: 'ចំនួន',
    Date: 'កាលបរិច្ឆេទ',
    REQUESTED: 'បានស្នើសុំ',
    TRANSFERRED: 'បានបញ្ជូន',
    CANCELLEDStatus: 'ស្ថានភាពបានលុប',
    WithdrawRequests: 'សំណើសុំដកប្រាក់',
    TotalRestaurants: 'ចំនួនសំុក',
    Restaurants: 'សំុក',
    Vendors: 'អ្នកលក់',
    RestaurantUpdatedSuccessfully:
      'ការធ្វើបច្ចុប្បន្នភាពកំណត់ហេតុរបស់សំុកបានបន្ថែមដោយជោគជ័យ',
    UpdateProfile: 'ធ្វើបច្ចុប្បន្នភាពទម្រង់',
    PHRestaurantPassword: 'ពាក្យសម្ងាត់សំុក',
    PHRestaurantName: 'ឈ្មោះសំុក',
    PHRestaurantAddress: 'អាសយដ្ឋានសំុក',
    OrderPrefix: 'បុព្វបទបញ្ជាពន្ធ',
    Days: 'ថ្ងៃ',
    OpenTimes: 'ម៉ោងបើក',
    TimeSavedSuccessfully: 'បានរក្សារទុកពេលដែលជោគជ័យ',
    ErrorWhileSavingTime: 'មានកំហុសពេលរក្សារទុកពេល',
    SavingDots: 'កំពុងរក្សារទុក...',
    January: 'មករា',
    February: 'កុម្ភៈ',
    March: 'មីនា',
    April: 'មេសា',
    May: 'ឧសភា',
    June: 'មិថុនា',
    July: 'កក្កដា',
    MainPageText: 'កម្មវិធីសំរាប់ប្រព័ន្ធកុំព្យូទ័រ',
    MainPageText1: 'ប្រព័ន្ធមួយដែលមានសំរាប់ទើបអាចតាមដានសំរាប់សំុកណាមួយ។',
    ViewSite: 'មើលទំព័រ',
    TotalUsers: 'សរុបអ្នកប្រើប្រាស់',
    TotalVendors: 'សរុបអ្នកលក់',
    TotalRiders: 'សរុបអ្នកជើងលើ',
    RestaurantSections: 'ផ្នែកសំុក',
    ImageMenu: 'ម៉ឺនុយរូប',
    Vendor: 'អ្នកលក់',
    AddNewRestaurant: 'បន្ថែមសំុកថ្មី',
    Ratings: 'ការវាយតម្លៃ',
    StripeDetailsAttached: 'លម្អិតព័ត៌មាន Stripe',
    EditStripeDetails: 'កែសម្រួលព័ត៌មាន Stripe',
    SubmitStripeDetails: 'ដាក់ពាក្យសម្ងាត់ព័ត៌មាន Stripe',
    'Restaurant Sections': 'ផ្នែកសំុក',
    Riders: 'អ្នកជើងលើ',
    Tipping: 'បង់ជូនរថយន្ត',
    Zone: 'តំបន់',
    'Commission Rates': 'អត្ថបទនៃការរួមបញ្ចូល',
    'Withdraw Requests': 'សំណើសុំដកប្រាក់',
    Home: 'ទំព័រដើម',
    Profile: 'ទម្រង់',
    Option: 'ជម្រើស',
    Timings: 'ពេលវេលា',
    Location: 'ទីតាំង',
    'Back to Admin': 'ត្រឡប់ទៅអគ្គនាយក',
    TotalOrders: 'សរុបការបញ្ជាទិញ',
    TotalSales: 'សរុបការលក់',
    ClosedAllDay: 'បានបិទជុំវិញរបស់ថ្ងៃ',
    AddRestaurant: 'បន្ថែមសំុក',
    EditCoupon: 'កែសម្រួលការបញ្ជារបស់អ្នក',
    AddCoupon: 'បន្ថែមការបញ្ជារបស់អ្នក',
    SalesAmount: 'ចំនួនលក់',
    OrderCount: 'ចំនួនការបញ្ជាទិញ',
    MON: 'ច័ន្ទ',
    TUE: 'អង្គារ',
    WED: 'ពុធ',
    THU: 'ព្រហស្បត់',
    FRI: 'សុក្រ',
    SAT: 'សៅរ៍',
    SUN: 'អាទិត្យ',
    Open: 'បើក',
    ACCEPTED: 'ត្រូវបានទទួលយក',
    PENDING: 'កំពុងរងចាំ',
    PICKED: 'ត្រូវបានជ្រើសរើស',
    ASSIGNED: 'ត្រូវបានផ្ដល់បន្ថែម',
    DELIVERED: 'ត្រូវបានដឹកជញ្ជូន',
    REJECTED: 'ត្រូវបានបដិសេធចោល',
    UploadaLogo: 'ផ្ទុកឡូកូឡូត',
    "Status updated to {{status}}": "ស្ថានភាពត្រូវបានធ្វើបច្ចុប្បន្នភាពទៅ{{status}}",
    StatusUpdated: "!ស្ថានភាពត្រូវបានធ្វើបច្ចុប្បន្នភាព",
    "Failed to update status!": "!បរាជ័យក្នុងការធ្វើបច្ចុប្បន្នភាពស្ថានភាព",
    UpdateSuccessful: "!ការធ្វើបច្ចុប្បន្នភាពជោគជ័យ",
    UpdateError: "កំហុសនៃការធ្វើបច្ចុប្បន្នភាព",
    "The value Should not be in the negative": "តម្លៃមិនគួរត្រូវជាលេខអវិជ្ជមាន",
    "CostType": "ប្រភេទថ្លៃ",
    "PerKM": "ក្នុងមួយគីឡូម៉ែត្រ",
    "FixedCost": "ថ្លៃថេរ"

  }
}

export default km
