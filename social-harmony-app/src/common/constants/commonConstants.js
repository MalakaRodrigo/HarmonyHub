const organizationLevelId = 1;
const organization = 'organization';
const accountLevelId = 2;
const account = 'account';
const contactLevelId = 3;
const contact = 'contact';
const pipelineLevelId = 4;
const pipeline = 'pipeline';
const scenarioLevelId = 5;
const scenario = 'scenario';
const taskLevelId = 6;
const task = 'task';
const successPlanLevelId = 7;
const successPlan = 'successPlan';

const constants = {
  ORGANIZATION_LEVEL_ID: organizationLevelId,
  ORGANIZATION_LEVEL: organization,
  ACCOUNT_LEVEL_ID: accountLevelId,
  ACCOUNT_LEVEL: account,
  CONTACT_LEVEL_ID: contactLevelId,
  CONTACT_LEVEL: contact,
  PIPELINE_LEVEL_ID: pipelineLevelId,
  PIPELINE_LEVEL: pipeline,
  SCENARIO_LEVEL_ID: scenarioLevelId,
  SCENARIO_LEVEL: scenario,
  PROCESSABLE_FIELDS: ['number', 'currency'],
  TASK_LEVEL_ID: taskLevelId,
  TASK_LEVEL: task,
  SUCCESS_PLAN_LEVEL: successPlan,
  SUCCESS_PLAN_LEVEL_ID: successPlanLevelId,
};

export const LEVEL_TITLES = {
  [constants.ORGANIZATION_LEVEL]: 'Organization',
  [constants.ACCOUNT_LEVEL]: 'Account',
  [constants.CONTACT_LEVEL]: 'Contact',
  [constants.PIPELINE_LEVEL]: 'Pipeline',
  [constants.SCENARIO_LEVEL]: 'Scenario',
  [constants.TASK_LEVEL]: 'Task',
};
export const LEVEL_ID_FIELD = {
  [constants.ORGANIZATION_LEVEL]: 'organizationId',
  [constants.ACCOUNT_LEVEL]: 'accountId',
  [constants.CONTACT_LEVEL]: 'contactId',
  [constants.PIPELINE_LEVEL]: 'pipelineId',
  [constants.TASK_LEVEL]: 'taskId',
};

const levelIdMap = {
  [constants.ORGANIZATION_LEVEL]: constants.ORGANIZATION_LEVEL_ID,
  [constants.ACCOUNT_LEVEL]: constants.ACCOUNT_LEVEL_ID,
  [constants.CONTACT_LEVEL]: constants.CONTACT_LEVEL_ID,
  [constants.PIPELINE_LEVEL]: constants.PIPELINE_LEVEL_ID,
  [constants.TASK_LEVEL]: constants.TASK_LEVEL_ID,
};

export const LEVEL_ID_MAP = levelIdMap;

const idLevelMap = {
  [constants.ORGANIZATION_LEVEL_ID]: constants.ORGANIZATION_LEVEL,
  [constants.ACCOUNT_LEVEL_ID]: constants.ACCOUNT_LEVEL,
  [constants.CONTACT_LEVEL_ID]: constants.CONTACT_LEVEL,
  [constants.PIPELINE_LEVEL_ID]: constants.PIPELINE_LEVEL,
  [constants.TASK_LEVEL_ID]: constants.TASK_LEVEL,
};

export const ID_LEVEL_MAP = idLevelMap;

const verticalCalculationLevelHierarchy = {
  [constants.ORGANIZATION_LEVEL_ID]: [
    constants.ACCOUNT_LEVEL_ID,
    constants.PIPELINE_LEVEL_ID,
  ],
  [constants.ACCOUNT_LEVEL_ID]: [constants.PIPELINE_LEVEL_ID],
  [constants.CONTACT_LEVEL_ID]: [],
};

export const CALC_HIERARCHY = verticalCalculationLevelHierarchy;

export const CALC_TYPES = {
  HORIZONTAL: 1, // we call this calculated
  VERTICAL: 2, // we call this aggregated
};

export const COLUMN_CONFIG_TYPES = {
  MAPPING: 1,
  CONDITION: 2,
};

const dataTypes = {
  // basic
  string: 'string',
  boolean: 'boolean',
  number: 'number',
  date: 'date',
  mandatoryDate: 'mandatoryDate',
  mandatoryNumber: 'mandatoryNumber',
  // reference
  organization: 'organization',
  account: 'account',
  contact: 'contact',
  user: 'user',
  singlePicklist: 'singlePicklist',
  multiPicklist: 'multiPicklist',
  // reference - list
  organizationPicklist: 'organizationPicklist',
  accountPicklist: 'accountPicklist',
  contactPicklist: 'contactPicklist',
  userPicklist: 'userPicklist',
  // custom
  currency: 'currency',
  percentage: 'percentage',
  // FE only
  longText: 'longText',
  email: 'email',
  pulse: 'pulse',
  health: 'health',
  lifecycleStage: 'lifecycleStage',
  owner: 'owner',
  pipelineStatus: 'pipelineStatus',
  parentEntity: 'parentEntity',
  churnReason: 'churnReason',
};
export const DATA_TYPES = dataTypes;

// For data management attribute types only
const dataTypesDisplay = {
  // basic
  [dataTypes.string]: 'Text',
  [dataTypes.boolean]: 'True/False',
  [dataTypes.number]: 'Numeric',
  [dataTypes.date]: 'Date',

  // reference
  [dataTypes.organization]: 'Organization',
  [dataTypes.account]: 'Account',
  [dataTypes.contact]: 'Contact',
  [dataTypes.user]: 'User',
  [dataTypes.singlePicklist]: 'Single Option',
  [dataTypes.multiPicklist]: 'Multi Option',
  // reference - list
  [dataTypes.organizationPicklist]: 'Organization Multi Option',
  [dataTypes.accountPicklist]: 'Account Multi Option',
  [dataTypes.contactPicklist]: 'Contact Multi Option',
  [dataTypes.userPicklist]: 'User Multi Option',
  // custom
  [dataTypes.currency]: 'Currency',
};
export const DATA_TYPES_DISPLAY = dataTypesDisplay;

export const REFERENCE_DATA_TYPES = [
  DATA_TYPES.organization,
  DATA_TYPES.account,
  DATA_TYPES.contact,
  DATA_TYPES.user,
];

export const REFERENCE_LIST_DATA_TYPES = [
  DATA_TYPES.organizationPicklist,
  DATA_TYPES.accountPicklist,
  DATA_TYPES.contactPicklist,
  DATA_TYPES.userPicklist,
];

// quick task types
export const LOG_ACTIVITY = 'Log Activity';
export const SEND_EMAIL = 'Send Email';
export const NEW_TASK = 'Create Task';
export const NEW_NOTE = 'Save Note';
export const MARK_HEALTH = 'Add Pulse';
export const UPLOAD_FILE = 'Upload File';

// activity types
export const ALL = 'All';
export const EMAILS = 'Emails';
export const CALENDAR_ACTIVITIES = 'Calendar Activities';
export const ACTIVITIES = 'Activities';
export const TASKS = 'Tasks';
export const NOTES = 'Notes';
export const PULSE = 'Pulse';
export const TICKETS = 'Tickets';
export const CONVERSATIONS = 'Conversations';
export const FILES = 'Files';
export const SAVED = 'Saved';

export const SESSION_EXPIRED_ERROR = 'SESSION_EXPIRED_ERROR';
export const DEFAULT_ERROR_MESSAGE = 'Something went wrong, please try again';

export const TABLE_CELL_MAX_CHAR_COUNT = 12;
export const TEXT_FIELD_MAX_CHAR_COUNT = 100;
export const STRING_TYPE_CUSTOM_ATTR_MAX_CHAR_COUNT = 5000;
export const TEXT_AREA_FIELD_MAX_CHAR_COUNT = 1000;

export const NUMBER_INPUT_REGEX = /^[+-]?(\d*[.])?\d+$/;
export const NON_DECIMAL_NUMBER_REGEX = /^([1-9]\d*)$/;
export const CURRENCY_INPUT_REGEX = /^(\d*[.])?\d+$/;
export const DECIMAL_NUMBER_REGEX = /^\d*\.\d+$/;

export default constants;

/**
 * Permission types
 */
export const PERMISSION_TYPES = {
  ADMINISTRATOR: 'Administrator',
  VIEWER: 'Viewer',
  MANAGER: 'Manager',
  NORMAL_USER: 'Normal User',
  OWNER: 'Owner',
  ANY: 'Any',
};

export const SCOPE_LEVEL_ID_MAPPING = {
  organization: constants.ORGANIZATION_LEVEL_ID,
  account: constants.ACCOUNT_LEVEL_ID,
  contact: constants.CONTACT_LEVEL_ID,
  pipeline: constants.PIPELINE_LEVEL_ID,
};

export const DRAWER_ACTIONS = {
  ADD: 'Add',
  EDIT: 'Edit',
  VIEW: 'View',
  DUPLICATE: 'Duplicate',
};

export const SYSTEM_RESERVED_KEYWORDS = {
  organization: [
    'account',
    'organization',
    'contact',
    'health',
    'pulse',
    'lifecycle stage',
    'owner',
  ],

  account: [
    'account',
    'organization',
    'contact',
    'health',
    'pulse',
    'lifecycle stage',
    'owner',
  ],

  contact: [
    'account',
    'organization',
    'contact',
    'health',
    'pulse',
    'lifecycle stage',
    'email',
  ],

  pipeline: [
    'account',
    'organization',
    'contact',
    'status',
    'parent entity',
    'email',
  ],
};

export const PULSE_FILTER_OPTIONS = [
  {
    value: 1,
    displayName: 'High Risk',
  },
  {
    value: 2,
    displayName: 'Some Risk',
  },
  {
    value: 3,
    displayName: 'Moderate',
  },
  {
    value: 4,
    displayName: 'Satisfied',
  },
  {
    value: 5,
    displayName: 'Very Satisfied',
  },
];

export const PULSE_ACTIVITY_FILTER_OPTIONS = [
  {
    value: 'High Risk',
    displayName: 'High Risk',
  },
  {
    value: 'Some Risk',
    displayName: 'Some Risk',
  },
  {
    value: 'Moderate',
    displayName: 'Moderate',
  },
  {
    value: 'Satisfied',
    displayName: 'Satisfied',
  },
  {
    value: 'Very Satisfied',
    displayName: 'Very Satisfied',
  },
];

export const CHURN_REASON_OPTIONS = [
  { value: 1, displayName: 'Failed to Achieve Outcome' },
  { value: 2, displayName: 'Lost Champion' },
  { value: 3, displayName: 'Low Adoption' },
  { value: 4, displayName: 'Poor Service' },
  { value: 5, displayName: 'Product Issue' },
  { value: 6, displayName: 'Not the ideal customer' },
  { value: 7, displayName: 'Switch to Competitor' },
  { value: 8, displayName: 'Buy over' },
  { value: 999, displayName: 'Other' },
];

export const ARCHIVED_BOOLEAN_MAPPING = {
  0: false,
  1: true,
};

export const BOOLEAN_INT_MAPPING = {
  FALSE: 0,
  TRUE: 1,
};

export const DURATION_PERIODS = {
  DAYS: 'Days',
  WEEKS: 'Weeks',
  MONTHS: 'Months',
  QUARTERS: 'Quarters',
};

export const DURATION_PERIODS_MAPPING = {
  [DURATION_PERIODS.DAYS]: {
    value: 'day',
    displayName: 'Days',
  },
  [DURATION_PERIODS.WEEKS]: {
    value: 'week',
    displayName: 'Weeks',
  },
  [DURATION_PERIODS.MONTHS]: {
    value: 'month',
    displayName: 'Months',
  },
  [DURATION_PERIODS.QUARTERS]: {
    value: 'quarter',
    displayName: 'Quarters',
  },
};

export const PERIOD_COMPARISON_FACTORS = {
  [DURATION_PERIODS.DAYS]: 1,
  [DURATION_PERIODS.WEEKS]: 7,
  [DURATION_PERIODS.MONTHS]: 30,
  [DURATION_PERIODS.QUARTERS]: 90,
};

export const PRIVACY_POLICY_URL = 'https://www.velaris.io/privacy-policy';
export const TERMS_URL = 'https://www.velaris.io/terms-of-service';

export const PROFILE_IMAGE_UPLOAD = 'profile';

export const PUBLIC_IMAGE_UPLOAD_SERVICE_DIRECTORIES = {
  SURVEYS: 'surveys',
  EMAIL_TEMPLATE: 'email-template',
};
export const PROFILE_SETUP_IMAGE_UPLOAD = 'profileSetup';

export const DECIMAL_SYSTEM = 10;

export const SPECIAL_USER_FIELD_IDS = {
  PRIMARY_OWNER: -1,
};

export const SPECIAL_USER_FIELDS_ID_MAPPING = {
  [SPECIAL_USER_FIELD_IDS.PRIMARY_OWNER]: {
    customColumnId: -1,
    displayName: 'Primary Owner',
  },
};

export const GLOBAL_DEFAULT_PAGE_SIZE = 20;
export const SORT_ASC = 'ASC';
export const SORT_DESC = 'DESC';

export const ENTITY_FORMATS = {
  LIST: 'list',
  BOARD: 'board',
};

export const BOARD_VIEW_PAGE_SIZE = 50;

export const UPLOAD_ALLOWED_LEVELS = [
  constants.ACCOUNT_LEVEL,
  constants.ORGANIZATION_LEVEL,
  constants.CONTACT_LEVEL,
];

export const MASS_UPDATE_JOB_STATUS = {
  INITIATING: 0,
  SUBMITTED: 10,
  PROCESSING: 20,
  STOPPED: 30,
  COMPLETED: 40,
};
export const MASS_UPDATE_JOB_STATUS_LABELS = {
  [MASS_UPDATE_JOB_STATUS.INITIATING]: 'Submitting ',
  [MASS_UPDATE_JOB_STATUS.SUBMITTED]: 'Submitted',
  [MASS_UPDATE_JOB_STATUS.PROCESSING]: 'Processing',
  [MASS_UPDATE_JOB_STATUS.STOPPED]: 'Stopped',
  [MASS_UPDATE_JOB_STATUS.COMPLETED]: 'Completed',
};

export const MASS_UPDATE_JOB_TYPES = {
  ENTITY_MASS_UPDATE: 10,
  ENTITY_MASS_UPLOAD: 20, // upload normal flow
  ENTITY_MASS_UPLOAD_UPDATE: 30, // upload create only
};
export const MASS_UPDATE_JOB_TYPE_LABEL = {
  [MASS_UPDATE_JOB_TYPES.ENTITY_MASS_UPDATE]: 'Mass Update',
  [MASS_UPDATE_JOB_TYPES.ENTITY_MASS_UPLOAD]: 'Bulk Upload', // upload normal flow
  [MASS_UPDATE_JOB_TYPES.ENTITY_MASS_UPLOAD_UPDATE]: 'Bulk Upload', // upload create only
};

export const TABLE_ACTIONS_TO_FETCH_DATA = ['paginate', 'sort'];

export const SYSTEM_USER_ID = 1;

export const US_ENGLISH = 'en-US';

export const GOOGLE_CALENDAR_SYNC_OPTION = {
  SYNC_ONLY_FUTURE: 'FUTURE_ONLY',
  SYNC_HISTORICAL_AND_FUTURE: 'SYNC_HISTORICAL_AND_FUTURE',
};
export const TEXT_POPOVER_COPY_TOOLTIP_LIMIT = 10;

export const ASSIGNEE_TYPE = {
  USER: 'USER',
  CONTACT: 'CONTACT',
};

export const MAX_RICH_TEXT_CHAR_LIMIT = 5000;

export const TABLE_ACTION_TEXT = {
  SEARCH_BAR: 'Search Table',
  BUTTON_TEXT: 'ADD NEW',
};

export const CONFIRM_MODAL_TYPE = {
  UNSAVED: 'UNSAVED',
};
export const BANNER_INFO_STATUS = {
  INFO: 'info',
  WARNING: 'warning',
  ERROR: 'error',
  SUCCESS: 'success',
};

export const PORTAL_ACCESS_STATUS = {
  NO_ACCESS: 0,
  ACTIVE: 1,
  DISABLED: 2,
};

export const PORTAL_ACCESS_STATUS_MAPPING = {
  [PORTAL_ACCESS_STATUS.NO_ACCESS]: {
    displayName: 'No access',
    className: 'no-access',
  },
  [PORTAL_ACCESS_STATUS.ACTIVE]: {
    displayName: 'Activated',
    className: 'activated',
  },
  [PORTAL_ACCESS_STATUS.DISABLED]: {
    displayName: 'Disabled',
    className: 'disabled',
  },
};

export const MAX_NO_OF_ENTITY_OWNERS = 10;

export const MAX_NO_OF_ENTITY_OWNERS_DISPLAY = 4;
export const MAX_UNIQUE_ATTRIBUTES_PER_LEVEL = 5;
