export type DateTimeString = `${number}${number}${number}${number}-${number}${number}-${number}${number}T${number}${number}:${number}${number}:${number}${number}Z`;
import type { UUID } from "node:crypto";/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Activity {
  /** @format uuid */
  id: UUID;
  name: string;
  description: string;
  type: ActivityType;
  /** @format uuid */
  contentId: UUID;
  /**
   * Estimated time to complete the activity in minutes
   * @format int32
   */
  estimatedTime: number;
  /** @format date-time */
  startDate: DateTimeString | null;
  /** @format date-time */
  endDate: DateTimeString | null;
}

export interface ActivityAddedToLesson {
  /** @format uuid */
  curriculumId: UUID;
  /** @format uuid */
  lessonId: UUID;
  /** @format uuid */
  activityId: UUID;
  /** @format uuid */
  creatorId: UUID;
}

export interface ActivityDeletedFromLesson {
  /** @format uuid */
  curriculumId: UUID;
  /** @format uuid */
  lessonId: UUID;
  /** @format uuid */
  activityId: UUID;
}

export interface ActivityModified {
  /** @format uuid */
  curriculumId: UUID;
  /** @format uuid */
  lessonId: UUID;
  /** @format uuid */
  activityId: UUID;
}

export interface ActivityOrderChanged {
  /** @format uuid */
  curriculumId: UUID;
  /** @format uuid */
  lessonId: UUID;
}

export enum ActivityType {
  InteractiveDocument = "InteractiveDocument",
  Presentation = "Presentation",
  Quiz = "Quiz",
}

export interface ActivityWithClassProgress {
  /** @format uuid */
  id: UUID;
  name: string;
  description: string;
  type: ActivityType;
  /** @format uuid */
  contentId: UUID;
  /** @format float */
  progress: number;
  /** @format int32 */
  estimatedTime: number;
  /** @format date-time */
  startDate: DateTimeString | null;
  /** @format date-time */
  endDate: DateTimeString | null;
}

export interface ActivityWithClassProgressAndFinishedUsers {
  /** @format uuid */
  id: UUID;
  name: string;
  description: string;
  type: ActivityType;
  /** @format uuid */
  contentId: UUID;
  /** @format float */
  progress: number;
  finishedStudents: UUID[];
  /** @format int32 */
  estimatedTime: number;
  /** @format date-time */
  startDate: DateTimeString | null;
  /** @format date-time */
  endDate: DateTimeString | null;
}

export interface ActivityWithUserProgress {
  /** @format uuid */
  id: UUID;
  name: string;
  description: string;
  type: ActivityType;
  /** @format uuid */
  contentId: UUID;
  /** @format int32 */
  estimatedTime: number;
  isFinished: boolean;
  /** @format date-time */
  startDate: DateTimeString | null;
  /** @format date-time */
  endDate: DateTimeString | null;
}

/** Add new activity to lesson */
export interface AddActivityToLessonRequest {
  /** New activity name */
  name: string;
  /** New activity description */
  description: string;
  type: ActivityType;
  /**
   * New activity content id
   * @format uuid
   */
  contentId: UUID;
  /**
   * Estimated time to finish activity
   * @format int32
   */
  estimatedTime: number;
  /**
   * Study from
   * @format date-time
   */
  startDate: DateTimeString | null;
  /**
   * Study until
   * @format date-time
   */
  endDate: DateTimeString | null;
}

/** Add new lesson to curriculum */
export interface AddLessonToCurriculumRequest {
  /** New lesson name */
  name: string;
  /** New lesson description */
  description: string;
  /** Lesson plan */
  lessonPlan: string | null;
  /**
   * Study from
   * @format date-time
   */
  startDate: DateTimeString | null;
  /**
   * Study until
   * @format date-time
   */
  endDate: DateTimeString | null;
}

/** Request for adding new question to quiz */
export interface AddQuizQuestionRequest {
  newQuestion: QuizQuestionResponse;
}

export interface AddUsersToGroupRequest {
  /** @format uuid */
  groupId: UUID;
  newMembers: UUID[];
}

export interface AllUserProductsResponse {
  packagesIds: string[];
  featureFlags: string[];
}

/** Response to submitting answer to question in quiz session */
export interface AnswerSubmittedResponse {
  /**
   * Id of quizSession answer was submitted for
   * @format uuid
   */
  quizSessionId: UUID;
  answer: QuizQuestionAnswerResponse;
  /** Was student answer correct */
  wasCorrect: boolean | null;
  /**
   * Student id
   * @format uuid
   */
  studentId: UUID;
}

/** Data structure for assigning user to license */
export interface AssignLicenseToUserRequest {
  licenseName: string;
}

/** Request for assigning users to quiz instance */
export interface AssignUsersToQuizInstanceRequest {
  /** @format uuid */
  quizInstanceId: UUID;
  /** List of users to assign to quiz instance */
  studentsIdsToAssign: UUID[];
}

export interface AvailableLicenseDeleted {
  /** @format uuid */
  id: UUID;
}

/** Change order of activities in lesson */
export interface ChangeActivityOrderRequest {
  /** @format uuid */
  curriculumId: UUID;
  /** @format uuid */
  lessonId: UUID;
  /** New activities order */
  newOrder: UUID[];
}

/** Change order of lessons in curriculum */
export interface ChangeLessonOrderRequest {
  /** @format uuid */
  curriculumId: UUID;
  /** Array of lesson ids in new order */
  newOrder: UUID[];
}

export interface ChangePresentationSessionRequest {
  /** @format uuid */
  id: UUID;
  /** @format int32 */
  actualPage: number;
}

/** Check if password is valid */
export interface CheckPasswordRequest {
  /** AdminPassword to check */
  password: string;
}

export interface Classroom {
  /** @format uuid */
  id: UUID;
  name: string;
  description: string;
  /** @format uuid */
  curriculumId: UUID | null;
  students: UUID[];
  teachers: UUID[];
  /** @format uuid */
  creatorId: UUID;
}

export interface ClassroomCreated {
  /** @format uuid */
  id: UUID;
  name: string;
  description: string;
  /** @format uuid */
  creatorId: UUID;
}

export interface ClassroomDeleted {
  /** @format uuid */
  classroomId: UUID;
}

export interface ClassroomModified {
  /** @format uuid */
  id: UUID;
  name: string;
  description: string;
  /** @format uuid */
  creatorId: UUID;
}

export interface ConnectGuestToPresentationSessionRequest {
  /** @format uuid */
  presentationSessionId: UUID;
  name: string;
  connectionId: string;
  /** @format uuid */
  organizationId: UUID;
}

export interface ConnectUserToPresentationSessionRequest {
  /** @format uuid */
  presentationSessionId: UUID;
  connectionId: string;
}

/** Create new curriculum based on another one */
export interface CopyCurriculumRequest {
  /** New curriculum name */
  name: string;
  /** New curriculum description */
  description: string;
}

export interface CreateGroupRequest {
  name: string;
  members: UUID[];
  description: string | null;
  /** @format uuid */
  parentGroupId: UUID | null;
}

export interface CreateInteractiveDocumentRequest {
  /** @format uuid */
  parentInteractiveDocumentId: UUID | null;
  interactiveDocumentJson: string;
}

export interface CreateLicenseRequest {
  /** @format uuid */
  organizationId: UUID;
  /** @format uuid */
  licenseTypeId: UUID;
  productPackageIds: UUID[];
  productFeatureIds: UUID[];
  licenseName: string;
  description: string;
}

export interface CreateLicenseTypeRequest {
  name: string;
  productPackageIds: UUID[];
  productFeatureIds: UUID[];
}

export interface CreateNewClassroomRequest {
  name: string;
  description: string;
  /** @format uuid */
  curriculumId: UUID | null;
  students: UUID[];
  teachers: UUID[];
}

/** Create new curriculum */
export interface CreateNewCurriculumRequest {
  /** Curriculum name */
  name: string;
  /** Curriculum description */
  description: string;
}

export interface CreateOrganizationRequest {
  name: string;
  email: string;
  corporateIdentificationNumber: string;
}

export interface CreatePresentationRequest {
  presentationJson: string;
}

export interface CreateProductFeatureRequest {
  name: string;
  description: string;
  featureFlags: string[];
}

export interface CreateProductPackageRequest {
  name: string;
  description: string;
  packageIds: string[];
}

/** Request for creating new quiz instance directly without first creating quiz */
export interface CreateQuizInstanceDirectlyRequest {
  /** Class used to present quiz data to the outer world. */
  quiz: QuizResponse;
  /** Quiz instance title */
  title: string;
  config: QuizInstanceConfig;
  /** List of studentId to assign to new quizInstance */
  studentsIdsToAssign: UUID[];
}

/** Request for creating new quiz instance */
export interface CreateQuizInstanceRequest {
  /**
   * Quiz id to create instance from
   * @format uuid
   */
  quizId: UUID;
  /** Quiz instance title */
  title: string;
  config: QuizInstanceConfig;
}

/** Request for creating new quiz */
export interface CreateQuizRequest {
  /** Quiz info in multiple languages */
  translations: QuizTranslation[];
  /** Quiz tags */
  tags: string[];
}

export interface CreateRegisteredOrganizationOnlineRequest {
  organizationName: string;
  corporateIdentificationNumber: string;
  organizationEmail: string;
  adminFirstName: string;
  adminLastName: string;
  adminEmail: string;
}

/** Create new request */
export interface CreateUserRequest {
  /** New user first name */
  firstName: string;
  /** New user last name */
  lastName: string;
  /** New user email (Must be unique) */
  email: string;
  /** New user password */
  password: string | null;
  /** New user roles */
  roles: UserRole[];
}

export interface Curriculum {
  /** @format uuid */
  id: UUID;
  name: string;
  description: string;
  /** @format uuid */
  creatorId: UUID;
  lessons: Lesson[];
  /**
   * Estimated time to complete the curriculum in minutes
   * @format int32
   */
  estimatedTime: number;
  isPublished: boolean;
}

export interface CurriculumCreated {
  /** @format uuid */
  id: UUID;
  /** @format uuid */
  creatorId: UUID;
  name: string;
}

export interface CurriculumDeleted {
  /** @format uuid */
  curriculumId: UUID;
}

export interface CurriculumModified {
  /** @format uuid */
  curriculumId: UUID;
}

export interface CurriculumPublished {
  /** @format uuid */
  curriculumId: UUID;
}

export interface CurriculumUnpublished {
  /** @format uuid */
  curriculumId: UUID;
}

export interface CurriculumWithClassProgress {
  /** @format uuid */
  id: UUID;
  name: string;
  description: string;
  lessons: LessonWithClassProgress[];
  /** @format int32 */
  estimatedTime: number;
  /** @format float */
  progress: number;
}

export interface CurriculumWithUserProgress {
  /** @format uuid */
  id: UUID;
  name: string;
  description: string;
  lessons: LessonWithUserProgress[];
  /** @format int32 */
  estimatedTime: number;
  /** @format float */
  progress: number;
}

export interface DisconnectUserFromPresentationSessionRequest {
  /** @format uuid */
  presentationSessionId: UUID;
  /** @format uuid */
  userId: UUID;
}

export interface ExportLicensesToFileRequest {
  licensesIds: UUID[];
}

/** Enum is used to filter files according to their origin */
export enum FileTag {
  UserFile = "UserFile",
  PresentationBase = "PresentationBase",
  PresentationMedia = "PresentationMedia",
  InteractiveDocumentBase = "InteractiveDocumentBase",
  InteractiveDocumentMedia = "InteractiveDocumentMedia",
}

export interface FillInBlankTranslation {
  locale: string;
  question: string;
  correctAnswers: string[];
  text: string;
}

export interface FillInBlankTranslationWithoutCorrectAnswer {
  locale: string;
  question: string;
  text: string;
}

export interface FillInTheBlank {
  translations: FillInBlankTranslation[];
}

export interface FillInTheBlankAnswer {
  locale: string;
  value: string[];
}

export interface FillInTheBlankWithoutCorrectAnswerResponse {
  translations: FillInBlankTranslationWithoutCorrectAnswer[];
}

/** Finish activity */
export interface FinishActivityRequest {
  /** @format uuid */
  classroomId: UUID;
  /** Ids of activities user finished */
  finishedActivities: UUID[];
}

export interface Group {
  /** @format uuid */
  id: UUID;
  name: string;
  description: string | null;
  /** @format uuid */
  parentGroupId: UUID | null;
  /** @format uuid */
  organizationId: UUID;
  /** @format uuid */
  creatorId: UUID;
  isVisible: boolean;
  members: UUID[];
}

export interface GroupCreated {
  /** @format uuid */
  id: UUID;
  name: string;
  /** @format uuid */
  organizationId: UUID;
  /** @format uuid */
  creatorId: UUID;
  isVisible: boolean;
  members: UUID[];
  description: string | null;
  /** @format uuid */
  parentGroupId: UUID | null;
}

export interface GroupDeleted {
  /** @format uuid */
  id: UUID;
}

export interface GroupModified {
  /** @format uuid */
  id: UUID;
  name: string;
  /** @format uuid */
  organizationId: UUID;
  /** @format uuid */
  creatorId: UUID;
  isVisible: boolean;
  members: UUID[];
  description: string | null;
  /** @format uuid */
  parentGroupId: UUID | null;
}

export interface GuestConnectedToSession {
  /** @format uuid */
  presentationSessionId: UUID;
  presentationParticipantInfo: PresentationParticipantInfo;
  connectionId: string;
}

export interface Hotspot {
  translations: HotspotTranslation[];
  correctAnswers: string[];
}

export interface HotspotAnswer {
  value: string[];
}

export interface HotspotTranslation {
  locale: string;
  question: string;
}

export interface HotspotTranslationWithoutCorrectAnswer {
  locale: string;
  question: string;
}

export interface HotspotWithoutCorrectAnswerResponse {
  translations: HotspotTranslationWithoutCorrectAnswer[];
}

export type IResult = object;

/** Data structure for importing licenses */
export interface ImportLicensesRequest {
  /** Licenses signed and encrypted in jwt format */
  importToken: string;
}

export interface ImportedLicensesCount {
  licenseName: string;
  /** @format int32 */
  count: number;
}

export interface InteractiveDocument {
  /** @format uuid */
  id: UUID;
  /** @format uuid */
  authorId: UUID;
  /** @format uuid */
  parentInteractiveDocumentId: UUID | null;
  interactiveDocumentJson: string;
}

export interface InteractiveDocumentCreated {
  /** @format uuid */
  id: UUID;
  /** @format uuid */
  authorId: UUID;
  interactiveDocumentJson: string;
  /** @format uuid */
  parentInteractiveDocumentId: UUID | null;
}

export interface InteractiveDocumentDeleted {
  /** @format uuid */
  id: UUID;
}

export interface InteractiveDocumentModified {
  /** @format uuid */
  id: UUID;
  interactiveDocumentJson: string;
}

export interface InteractiveDocumentPublished {
  /** @format uuid */
  id: UUID;
  /** @format uuid */
  parentInteractiveDocumentId: UUID;
  interactiveDocumentJson: string;
}

export interface Lesson {
  /** @format uuid */
  id: UUID;
  name: string;
  description: string;
  lessonPlan: string | null;
  activities: Activity[];
  /**
   * Estimated time to complete the lesson in minutes
   * @format int32
   */
  estimatedTime: number;
  /** @format uuid */
  creatorId: UUID;
  /** @format date-time */
  startDate: DateTimeString | null;
  /** @format date-time */
  endDate: DateTimeString | null;
}

export interface LessonAddedToCurriculum {
  /** @format uuid */
  curriculumId: UUID;
  /** @format uuid */
  lessonId: UUID;
  /** @format uuid */
  userId: UUID;
}

export interface LessonDeletedFromCurriculum {
  /** @format uuid */
  curriculumId: UUID;
  /** @format uuid */
  lessonId: UUID;
}

export interface LessonModified {
  /** @format uuid */
  curriculumId: UUID;
  /** @format uuid */
  lessonId: UUID;
}

export interface LessonOrderChanged {
  /** @format uuid */
  curriculumId: UUID;
}

export interface LessonWithClassProgress {
  /** @format uuid */
  id: UUID;
  name: string;
  description: string;
  lessonPlan: string | null;
  activities: ActivityWithClassProgress[];
  /** @format float */
  progress: number;
  /** @format int32 */
  estimatedTime: number;
  /** @format date-time */
  startDate: DateTimeString | null;
  /** @format date-time */
  endDate: DateTimeString | null;
}

export interface LessonWithUserProgress {
  /** @format uuid */
  id: UUID;
  name: string;
  description: string;
  lessonPlan: string | null;
  activities: ActivityWithUserProgress[];
  /** @format float */
  progress: number;
  /** @format int32 */
  estimatedTime: number;
  /** @format date-time */
  startDate: DateTimeString | null;
  /** @format date-time */
  endDate: DateTimeString | null;
}

export interface License {
  /** @format uuid */
  id: UUID;
  /** @format uuid */
  organizationId: UUID;
  /** @format uuid */
  licenseTypeId: UUID;
  packagesIds: string[];
  featureFlags: string[];
  licenseName: string;
  description: string;
  deactivated: boolean;
}

export interface LicenseAssignedToUser {
  licenseName: string;
  /** @format uuid */
  userId: UUID;
  /** @format uuid */
  licenseId: UUID;
}

export interface LicenseCount {
  licenseName: string;
  /** @format int32 */
  count: number;
  /** @format int32 */
  availableCount: number;
}

export interface LicenseCreated {
  /** @format uuid */
  id: UUID;
  /** @format uuid */
  organizationId: UUID;
  /** @format uuid */
  licenseTypeId: UUID;
  packagesIds: string[];
  featureFlags: string[];
  licenseName: string;
  description: string;
  deactivated: boolean;
}

export interface LicenseDeactivated {
  /** @format uuid */
  id: UUID;
}

export interface LicenseType {
  /** @format uuid */
  id: UUID;
  name: string;
  productPackageIds: UUID[];
  productFeatureIds: UUID[];
  deactivated: boolean;
}

export interface LicenseTypeCreated {
  /** @format uuid */
  id: UUID;
  name: string;
  productPackageIds: UUID[];
  productFeatureIds: UUID[];
}

export interface LicenseTypeDeactivated {
  /** @format uuid */
  id: UUID;
}

export interface LicenseTypeModified {
  /** @format uuid */
  id: UUID;
  name: string;
  productPackageIds: UUID[];
  productFeatureIds: UUID[];
}

export interface LicenseUnassignedFromUser {
  licenseName: string;
  /** @format uuid */
  userId: UUID;
  /** @format uuid */
  licenseId: UUID;
}

export interface MatchPair {
  left: string;
  right: string[];
}

export interface Matching {
  translations: MatchingTranslation[];
}

export interface MatchingAnswer {
  locale: string;
  value: MatchPair[];
}

export interface MatchingTranslation {
  locale: string;
  question: string;
  pairs: MatchPair[];
}

export interface MatchingTranslationWithoutCorrectAnswer {
  locale: string;
  question: string;
  pairs: MatchPair[];
}

export interface MatchingWithoutCorrectAnswerResponse {
  translations: MatchingTranslationWithoutCorrectAnswer[];
}

/** ModelSettings */
export interface ModelSettingsResponse {
  /** @format uuid */
  id: UUID;
  disabledParts: string[];
  highlightedParts: string[];
  parts: string[];
  showOnlyParts: string[];
  /** Model configuration in JSON format */
  modelConfig: object | null;
}

/** Modify activity in lesson */
export interface ModifyActivityRequest {
  /** @format uuid */
  curriculumId: UUID;
  /** @format uuid */
  lessonId: UUID;
  /** @format uuid */
  activityId: UUID;
  /** New activity name */
  name: string;
  /** New activity description */
  description: string;
  type: ActivityType;
  /**
   * New activity content id
   * @format uuid
   */
  contentId: UUID;
  /**
   * Estimated time to finish activity
   * @format int32
   */
  estimatedTime: number;
  /**
   * Study from
   * @format date-time
   */
  startDate: DateTimeString | null;
  /**
   * Study until
   * @format date-time
   */
  endDate: DateTimeString | null;
}

export interface ModifyClassroomRequest {
  /** @format uuid */
  id: UUID;
  name: string;
  description: string;
  /** @format uuid */
  curriculumId: UUID | null;
  students: UUID[];
  teachers: UUID[];
}

export interface ModifyGroupRequest {
  /** @format uuid */
  id: UUID;
  newName: string;
  newDescription: string;
}

export interface ModifyInteractiveDocumentRequest {
  /** @format uuid */
  id: UUID;
  interactiveDocumentJson: string;
}

/** Modify lesson in curriculum */
export interface ModifyLessonRequest {
  /** @format uuid */
  curriculumId: UUID;
  /** @format uuid */
  lessonId: UUID;
  /** New lesson name */
  name: string;
  /** New lesson description */
  description: string;
  /** New lesson plan */
  lessonPlan: string | null;
  /**
   * Study from
   * @format date-time
   */
  startDate: DateTimeString | null;
  /**
   * Study until
   * @format date-time
   */
  endDate: DateTimeString | null;
}

export interface ModifyLicenseTypeNameRequest {
  /** @format uuid */
  id: UUID;
  name: string;
}

export interface ModifyLicenseTypeProductsRequest {
  /** @format uuid */
  id: UUID;
  productPackageIds: UUID[];
  productFeatureIds: UUID[];
}

export interface ModifyOrganizationRequest {
  /** @format uuid */
  id: UUID;
  name: string;
  email: string;
  corporateIdentificationNumber: string;
}

export interface ModifyPresentationRequest {
  /** @format uuid */
  id: UUID;
  presentationJson: string;
}

export interface ModifyProductFeatureRequest {
  /** @format uuid */
  id: UUID;
  name: string;
  description: string;
  featureFlags: string[];
}

export interface ModifyProductPackageRequest {
  /** @format uuid */
  id: UUID;
  name: string;
  description: string;
  packageIds: string[];
}

export interface ModifyUploadedFileNameRequest {
  /** @format uuid */
  id: UUID;
  fileName: string;
}

export interface ModifyUploadedFileUserFolderRequest {
  /** @format uuid */
  id: UUID;
  userFolder: string;
}

export interface MultipleAnswer {
  translations: MultipleAnswerTranslation[];
  correctAnswers: number[];
}

export interface MultipleAnswerAnswer {
  value: number[];
}

export interface MultipleAnswerResponseWithoutCorrectAnswerResponse {
  translations: MultipleAnswerTranslationWithoutCorrectAnswer[];
}

export interface MultipleAnswerTranslation {
  locale: string;
  question: string;
  options: string[];
}

export interface MultipleAnswerTranslationWithoutCorrectAnswer {
  locale: string;
  question: string;
  options: string[];
}

export interface MultipleChoice {
  translations: MultipleChoiceTranslation[];
  /** @format int32 */
  correctAnswer: number;
}

export interface MultipleChoiceAnswer {
  /** @format int32 */
  value: number;
}

export interface MultipleChoiceTranslation {
  locale: string;
  question: string;
  options: string[];
}

export interface MultipleChoiceTranslationWithoutCorrectAnswer {
  locale: string;
  question: string;
  options: string[];
}

export interface MultipleChoiceWithoutCorrectAnswerResponse {
  translations: MultipleChoiceTranslationWithoutCorrectAnswer[];
}

export interface NewUsersAddedToGroup {
  /** @format uuid */
  id: UUID;
  name: string;
  /** @format uuid */
  organizationId: UUID;
  /** @format uuid */
  creatorId: UUID;
  isVisible: boolean;
  members: UUID[];
  description: string | null;
  /** @format uuid */
  parentGroupId: UUID | null;
}

export interface NewUsersImportedToGroup {
  /** @format uuid */
  id: UUID;
  name: string;
  /** @format uuid */
  organizationId: UUID;
  /** @format uuid */
  creatorId: UUID;
  isVisible: boolean;
  members: UUID[];
  description: string | null;
  /** @format uuid */
  parentGroupId: UUID | null;
}

export interface Organization {
  /** @format uuid */
  id: UUID;
  name: string;
  email: string;
  corporateIdentificationNumber: string;
  deactivated: boolean;
}

export interface OrganizationActivated {
  /** @format uuid */
  id: UUID;
}

export interface OrganizationDeactivated {
  /** @format uuid */
  id: UUID;
}

export interface OrganizationModified {
  /** @format uuid */
  id: UUID;
  name: string;
  email: string;
  corporateIdentificationNumber: string;
}

export interface OrganizationRegistered {
  /** @format uuid */
  id: UUID;
  name: string;
  email: string;
  corporateIdentificationNumber: string;
  deactivated: boolean;
}

export interface PackageSearchRecord {
  /** In format PackageId + _ + LocalizationId; p_zver_klokan_cs-cz */
  id: string;
  packageId: string;
  localizedPackageName: string;
  localizedPackageDescription: string;
  localizationId: string;
}

export interface PackageSearchResponse {
  packageIds: string[];
  autocomplete: string[];
}

export interface Presentation {
  /** @format uuid */
  id: UUID;
  /** @format uuid */
  authorId: UUID;
  /** @format uuid */
  parentPresentationId: UUID | null;
  presentationJson: string;
}

export interface PresentationCreated {
  /** @format uuid */
  id: UUID;
  /** @format uuid */
  authorId: UUID;
  presentationJson: string;
}

export interface PresentationDeleted {
  /** @format uuid */
  id: UUID;
}

export interface PresentationModified {
  /** @format uuid */
  id: UUID;
  presentationJson: string;
}

export interface PresentationParticipantInfo {
  /** @format uuid */
  userId: UUID;
  fullName: string;
  guest: boolean;
}

export interface PresentationPublished {
  /** @format uuid */
  id: UUID;
  /** @format uuid */
  parentPresentationId: UUID;
  presentationJson: string;
}

export interface PresentationSession {
  /** @format uuid */
  id: UUID;
  /** @format uuid */
  publishedPresentationId: UUID;
  /** @format uuid */
  presenterId: UUID;
  participants: PresentationParticipantInfo[];
  /** @format date-time */
  updatedTime: DateTimeString;
}

export interface PresentationSessionChanged {
  /** @format uuid */
  id: UUID;
  /** @format int32 */
  actualPage: number;
}

export interface PresentationSessionFinished {
  /** @format uuid */
  id: UUID;
}

export interface PresentationSessionStarted {
  /** @format uuid */
  id: UUID;
  /** @format uuid */
  publishedPresentationId: UUID;
  /** @format uuid */
  presenterId: UUID;
  participants: PresentationParticipantInfo[];
}

export interface ProblemDetails {
  type: string | null;
  title: string | null;
  /** @format int32 */
  status: number | null;
  detail: string | null;
  instance: string | null;
  [key: string]: any;
}

export interface ProductFeature {
  /** @format uuid */
  id: UUID;
  name: string;
  description: string;
  isActive: boolean;
  featureFlags: string[];
}

export interface ProductFeatureActivated {
  /** @format uuid */
  id: UUID;
  name: string;
  description: string;
  isActive: boolean;
  featureFlags: string[];
}

export interface ProductFeatureCreated {
  /** @format uuid */
  id: UUID;
  name: string;
  description: string;
  isActive: boolean;
  featureFlags: string[];
}

export interface ProductFeatureDeactivated {
  /** @format uuid */
  id: UUID;
  name: string;
  description: string;
  isActive: boolean;
  featureFlags: string[];
}

export interface ProductFeatureModified {
  /** @format uuid */
  id: UUID;
  name: string;
  description: string;
  isActive: boolean;
  featureFlags: string[];
}

export interface ProductPackage {
  /** @format uuid */
  id: UUID;
  name: string;
  description: string;
  isActive: boolean;
  packageIds: string[];
}

export interface ProductPackageActivated {
  /** @format uuid */
  id: UUID;
  name: string;
  description: string;
  isActive: boolean;
  packageIds: string[];
}

export interface ProductPackageCreated {
  /** @format uuid */
  id: UUID;
  name: string;
  description: string;
  isActive: boolean;
  packageIds: string[];
}

export interface ProductPackageDeactivated {
  /** @format uuid */
  id: UUID;
  name: string;
  description: string;
  isActive: boolean;
  packageIds: string[];
}

export interface ProductPackageModified {
  /** @format uuid */
  id: UUID;
  name: string;
  description: string;
  isActive: boolean;
  packageIds: string[];
}

export interface PublishInteractiveDocumentRequest {
  /** @format uuid */
  interactiveDocumentId: UUID;
}

export interface PublishPresentationRequest {
  /** @format uuid */
  presentationId: UUID;
}

export interface PublishedInteractiveDocument {
  /** @format uuid */
  id: UUID;
  /** @format uuid */
  authorId: UUID;
  /** @format uuid */
  parentInteractiveDocumentId: UUID;
  interactiveDocumentJson: string;
}

export interface PublishedPresentation {
  /** @format uuid */
  id: UUID;
  /** @format uuid */
  authorId: UUID;
  /** @format uuid */
  parentPresentationId: UUID;
  presentationJson: string;
}

export interface QuizCreatedByUser {
  /** @format uuid */
  quizId: UUID;
  /** @format uuid */
  creatorId: UUID;
}

export interface QuizDeleted {
  /** @format uuid */
  quizId: UUID;
  /** @format uuid */
  updaterId: UUID;
}

export interface QuizInstanceAssignedToStudents {
  /** @format uuid */
  quizInstanceId: UUID;
  assignedStudents: UUID[];
  /** @format uuid */
  assignerId: UUID;
}

export interface QuizInstanceConfig {
  /**
   * Date until the quiz is available.
   * Time must be in UTC format ( YYYY-MM-DDThh:mm:ssZ )
   * @format date-time
   */
  dueDate: DateTimeString | null;
  /** Question order is random every time the quiz is started */
  shuffleQuestions: boolean;
  /** Correct answers are shown immediately after the question is answered */
  immediateFeedback: boolean;
  /** Correct answers are shown after the quiz is finished */
  showCorrectAnswerAfterFinish: boolean;
  /** Allow retakes */
  allowRetakes: boolean;
  /**
   * Maximum number of retakes
   * @format int32
   */
  retakeLimit: number;
}

export interface QuizInstanceCreated {
  /** @format uuid */
  quizInstanceId: UUID;
  /** @format uuid */
  quizId: UUID;
  /** @format uuid */
  creatorId: UUID;
}

export interface QuizInstanceInfoResponse {
  /** @format uuid */
  id: UUID;
  title: string;
  translation: QuizTranslation[];
  tags: string[];
  /** @format int32 */
  numberOfQuestions: number;
  useTimer: boolean;
  /** @format double */
  timer: number;
}

export interface QuizInstanceResponse {
  title: string;
  /** @format uuid */
  id: UUID;
  /** Class used to present quiz data to the outer world. */
  quiz: QuizResponse;
  config: QuizInstanceConfig;
  /** @format uuid */
  creatorId: UUID;
  assignedStudentsIds: UUID[];
}

export interface QuizInstanceWithoutCorrectAnswerResponse {
  title: string;
  /** @format uuid */
  id: UUID;
  /** Class used to present quiz data to the outer world. */
  quiz: QuizWithoutCorrectAnswerResponse;
  config: QuizInstanceConfig;
  /** @format uuid */
  creatorId: UUID;
  assignedStudentsIds: UUID[];
}

export interface QuizModified {
  /** @format uuid */
  quizId: UUID;
  /** @format uuid */
  updaterId: UUID;
}

/** QuizQuestionAnswer */
export interface QuizQuestionAnswerResponse {
  /** Id of question to which this answer belongs */
  questionId: string;
  /** Type of the answer */
  type:
    | "FillInTheBlankAnswer"
    | "HotspotAnswer"
    | "MatchingAnswer"
    | "MultipleAnswerAnswer"
    | "MultipleChoiceAnswer"
    | "ShortAnswerAnswer"
    | "TrueFalseAnswer";
  /** Data for specific answer type */
  answer:
    | FillInTheBlankAnswer
    | HotspotAnswer
    | MatchingAnswer
    | MultipleAnswerAnswer
    | MultipleChoiceAnswer
    | ShortAnswerAnswer
    | TrueFalseAnswer;
}

export interface QuizQuestionCreated {
  /** @format uuid */
  quizId: UUID;
  /** @format uuid */
  questionId: UUID;
  /** @format uuid */
  creatorId: UUID;
}

export interface QuizQuestionDeleted {
  /** @format uuid */
  quizId: UUID;
  /** @format uuid */
  questionId: UUID;
  /** @format uuid */
  updaterId: UUID;
}

export interface QuizQuestionModified {
  /** @format uuid */
  quizId: UUID;
  /** @format uuid */
  questionId: UUID;
  /** @format uuid */
  updaterId: UUID;
}

/** QuizQuestionResponse */
export interface QuizQuestionResponse {
  /** Metadata related to the quiz question. */
  metadata: {
    /**
     * Indicates whether the quiz question is considered valid.
     * @default true
     */
    isValid: boolean;
    /**
     * The unique identifier for the quiz question.
     * @format uuid
     * @example "123e4567-e89b-12d3-a456-426614174000"
     */
    id: UUID;
    /** The type of quiz question. */
    type: "FillInTheBlank" | "Hotspot" | "Matching" | "MultipleAnswer" | "MultipleChoice" | "ShortAnswer" | "TrueFalse";
    /**
     * Indicates if a timer should be used with this question.
     * @default false
     */
    useTimer: boolean;
    /**
     * The duration of the timer in seconds, if applicable.
     * @format double
     */
    timer: number | null;
    /**
     * Indicates if a 3D model should be used with this question.
     * @default false
     */
    useModel: boolean;
    /** Settings related to the model used in the quiz question. */
    modelSettings: ModelSettingsResponse | null;
  };
  /** The data specific to the quiz question type. */
  data: FillInTheBlank | Hotspot | Matching | MultipleAnswer | MultipleChoice | ShortAnswer | TrueFalse;
}

/** QuizQuestionWithoutCorrectAnswerResponse */
export interface QuizQuestionWithoutCorrectAnswerResponse {
  /** Metadata related to the quiz question. */
  metadata: {
    /**
     * Indicates whether the quiz question is considered valid.
     * @default true
     */
    isValid: boolean;
    /**
     * The unique identifier for the quiz question.
     * @format uuid
     * @example "123e4567-e89b-12d3-a456-426614174000"
     */
    id: UUID;
    /** The type of quiz question. */
    type: "FillInTheBlank" | "Hotspot" | "Matching" | "MultipleAnswer" | "MultipleChoice" | "ShortAnswer" | "TrueFalse";
    /**
     * Indicates if a timer should be used with this question.
     * @default false
     */
    useTimer: boolean;
    /**
     * The duration of the timer in seconds, if applicable.
     * @format double
     */
    timer: number | null;
    /**
     * Indicates if a 3D model should be used with this question.
     * @default false
     */
    useModel: boolean;
    /** Settings related to the model used in the quiz question. */
    modelSettings: ModelSettingsResponse | null;
  };
  /** The data specific to the quiz question type. */
  data:
    | FillInTheBlankWithoutCorrectAnswerResponse
    | HotspotWithoutCorrectAnswerResponse
    | MatchingWithoutCorrectAnswerResponse
    | MultipleAnswerResponseWithoutCorrectAnswerResponse
    | MultipleChoiceWithoutCorrectAnswerResponse
    | ShortAnswerResponseWithoutCorrectAnswerResponse
    | TrueFalseWithoutCorrectAnswerResponse;
}

/** Class used to present quiz data to the outer world. */
export interface QuizResponse {
  /** @format uuid */
  id: UUID;
  /** @format uuid */
  userCreatedId: UUID;
  /** @format date-time */
  createdAt: DateTimeString;
  /** @format uuid */
  userUpdatedId: UUID;
  /** @format date-time */
  updatedAt: DateTimeString;
  useTimer: boolean;
  /** @format double */
  timer: number;
  translations: QuizTranslation[];
  tags: string[];
  questions: QuizQuestionResponse[];
}

export interface QuizSessionQuestionResponse {
  question: QuizQuestionResponse;
  answers: QuizQuestionAnswerResponse[];
  isCorrect: boolean;
  isAnswered: boolean;
}

export interface QuizSessionQuestionWithoutCorrectAnswerResponse {
  question: QuizQuestionWithoutCorrectAnswerResponse;
  answers: QuizQuestionAnswerResponse[];
  isCorrect: boolean;
  isAnswered: boolean;
}

export interface QuizSessionResponse {
  /** @format uuid */
  id: UUID;
  /** @format uuid */
  studentId: UUID;
  /** @format date-time */
  startedAt: DateTimeString;
  quizInstance: QuizInstanceWithoutCorrectAnswerResponse;
  status: QuizSessionStatus;
}

export interface QuizSessionResultResponse {
  /** @format uuid */
  id: UUID;
  /** @format uuid */
  studentId: UUID;
  /** @format uuid */
  quizInstanceId: UUID;
  questions: QuizSessionQuestionResponse[];
  /** @format int32 */
  totalQuestions: number;
  /** @format int32 */
  correctAnswers: number;
  /** @format int32 */
  score: number;
  /** @format date-time */
  startedAt: DateTimeString;
  /** @format date-time */
  finishedAt: DateTimeString;
}

/**
 * Represents a simple version of the quiz session result.
 * Doesn't contain the answers to the questions and question details.
 */
export interface QuizSessionResultSimpleResponse {
  /** @format uuid */
  id: UUID;
  /** @format uuid */
  studentId: UUID;
  /** @format uuid */
  quizInstanceId: UUID;
  /** @format int32 */
  totalQuestions: number;
  /** @format int32 */
  correctAnswers: number;
  /** @format int32 */
  score: number;
  /** @format date-time */
  startedAt: DateTimeString;
  /** @format date-time */
  finishedAt: DateTimeString;
}

export interface QuizSessionResultWithoutCorrectAnswerResponse {
  /** @format uuid */
  id: UUID;
  /** @format uuid */
  studentId: UUID;
  /** @format uuid */
  quizInstanceId: UUID;
  questions: QuizSessionQuestionWithoutCorrectAnswerResponse[];
  /** @format int32 */
  totalQuestions: number;
  /** @format int32 */
  correctAnswers: number;
  /** @format int32 */
  score: number;
  /** @format date-time */
  startedAt: DateTimeString;
  /** @format date-time */
  finishedAt: DateTimeString;
}

export interface QuizSessionStarted {
  /** @format uuid */
  quizSessionId: UUID;
  /** @format uuid */
  quizInstanceId: UUID;
  /** @format uuid */
  studentId: UUID;
}

export interface QuizSessionStatus {
  /** @format int32 */
  totalQuestions: number;
  /** @format int32 */
  answeredQuestions: number;
  /** @format int32 */
  correctAnswers: number;
}

export interface QuizSessionSubmitted {
  /** @format uuid */
  quizSessionId: UUID;
  /** @format uuid */
  quizSessionResultId: UUID;
  /** @format uuid */
  studentId: UUID;
}

export interface QuizTranslation {
  locale: string;
  title: string;
  description: string;
}

/** Class used to present quiz data to the outer world. */
export interface QuizWithoutCorrectAnswerResponse {
  /** @format uuid */
  id: UUID;
  /** @format uuid */
  userCreatedId: UUID;
  /** @format date-time */
  createdAt: DateTimeString;
  /** @format uuid */
  userUpdatedId: UUID;
  /** @format date-time */
  updatedAt: DateTimeString;
  useTimer: boolean;
  /** @format double */
  timer: number;
  translations: QuizTranslation[];
  tags: string[];
  questions: QuizQuestionWithoutCorrectAnswerResponse[];
}

export interface RegisteredOrganization {
  /** @format uuid */
  id: UUID;
  organizationName: string;
  email: string;
  corporateIdentificationNumber: string;
  deactivated: boolean;
}

export interface RegisteredOrganizationCreated {
  /** @format uuid */
  id: UUID;
  organizationName: string;
  email: string;
  corporateIdentificationNumber: string;
}

export interface RegisteredOrganizationDeactivated {
  /** @format uuid */
  organizationId: UUID;
}

/** Remove activity progress */
export interface RemoveActivityProgressRequest {
  /** @format uuid */
  classroomId: UUID;
  /** Ids of activities user want to mark as not finished */
  unfinishedActivities: UUID[];
}

export interface RemoveUsersFromGroupRequest {
  /** @format uuid */
  groupId: UUID;
  membersToRemove: UUID[];
}

export interface ShortAnswer {
  translations: ShortAnswerTranslation[];
}

export interface ShortAnswerAnswer {
  locale: string;
  value: string;
}

export interface ShortAnswerResponseWithoutCorrectAnswerResponse {
  translations: ShortAnswerTranslationWithoutCorrectAnswer[];
}

export interface ShortAnswerTranslation {
  locale: string;
  question: string;
  correctAnswer: string;
}

export interface ShortAnswerTranslationWithoutCorrectAnswer {
  locale: string;
  question: string;
}

export interface StartPresentationSessionRequest {
  /** @format uuid */
  publishedPresentationId: UUID;
  participants: PresentationParticipantInfo[];
}

/** Request to start new quiz session */
export interface StartQuizSessionRequest {
  /**
   * Id of instance to start quiz session from
   * @format uuid
   */
  quizInstanceId: UUID;
}

/** Request to submit answer to question in quiz session */
export interface SubmitAnswerRequest {
  answer: QuizQuestionAnswerResponse;
}

export interface SubmitInstanceRequest {
  answers: QuizQuestionAnswerResponse[];
}

export interface TrueFalse {
  translations: TrueFalseTranslation[];
  correctAnswer: boolean;
}

export interface TrueFalseAnswer {
  value: boolean;
}

export interface TrueFalseTranslation {
  locale: string;
  question: string;
}

export interface TrueFalseTranslationWithoutCorrectAnswer {
  locale: string;
  question: string;
}

export interface TrueFalseWithoutCorrectAnswerResponse {
  translations: TrueFalseTranslationWithoutCorrectAnswer[];
}

/** Update curriculum */
export interface UpdateCurriculumRequest {
  /** @format uuid */
  curriculumId: UUID;
  /** New name */
  name: string;
  /** New Description */
  description: string;
}

/** Request for updating existing question in quiz */
export interface UpdateQuizQuestionRequest {
  updatedQuestion: QuizQuestionResponse;
}

/** Request for updating existing quiz */
export interface UpdateQuizRequest {
  /** @format uuid */
  quizId: UUID;
  /** Quiz info in multiple languages */
  translations: QuizTranslation[];
  /** Quiz tags */
  tags: string[];
}

/** Update users role */
export interface UpdateUsersRoleRequest {
  /**
   * ID of user to update roles for
   * @format uuid
   */
  userId: UUID;
  /** New user roles (Old roles are overriden) */
  roles: UserRole[];
}

export interface UploadedFile {
  /** @format uuid */
  id: UUID;
  /** @format uuid */
  ownerId: UUID;
  fileName: string;
  filePath: string;
  /** Enum is used to filter files according to their origin */
  fileTag: FileTag;
  userFolder: string | null;
}

export interface UploadedFileDeleted {
  /** @format uuid */
  id: UUID;
}

export interface UploadedFileNameModified {
  /** @format uuid */
  id: UUID;
  fileName: string;
}

export interface UploadedFileUploaded {
  /** @format uuid */
  id: UUID;
  /** @format uuid */
  ownerId: UUID;
  fileName: string;
  filePath: string;
  /** Enum is used to filter files according to their origin */
  fileTag: FileTag;
  userFolder: string | null;
}

export interface UploadedFileUserFolderModified {
  /** @format uuid */
  id: UUID;
  userFolder: string;
}

export interface User {
  /** @format uuid */
  id: UUID;
  email: string;
  firstName: string;
  lastName: string;
  /** @format uuid */
  organizationId: UUID;
  roles: UserRole[];
}

export interface UserActivationEmailResended {
  /** @format uuid */
  userId: UUID;
}

export interface UserConnectedToSession {
  /** @format uuid */
  presentationSessionId: UUID;
  /** @format uuid */
  userId: UUID;
  connectionId: string;
}

export interface UserCreated {
  /** @format uuid */
  id: UUID;
  firstName: string;
  lastName: string;
  email: string;
  roles: UserRole[];
  /** @format uuid */
  organizationId: UUID;
}

export interface UserCurriculumProgressUpdated {
  /** @format uuid */
  curriculumId: UUID;
  finishedActivities: UUID[];
  /** @format uuid */
  userId: UUID;
}

export interface UserDisconnectedFromSession {
  /** @format uuid */
  presentationSessionId: UUID;
  /** @format uuid */
  userId: UUID;
  connectionId: string;
}

export interface UserInfo {
  /** @format uuid */
  id: UUID;
  email: string;
  firstName: string;
  lastName: string;
  roles: UserRole[];
  /** @format uuid */
  organizationId: UUID;
  organizationName: string;
}

export enum UserRole {
  Student = "Student",
  Teacher = "Teacher",
  Admin = "Admin",
  SuperAdmin = "SuperAdmin",
}

export interface UserRolesUpdated {
  /** @format uuid */
  userId: UUID;
  roles: UserRole[];
}

export interface UsersImportedFromCsv {
  /** Ids of successfully imported users */
  importedUsers: UUID[];
  /** Email of users that failed to import */
  failedUsers: string[];
}

export interface UsersRemovedFromGroup {
  /** @format uuid */
  id: UUID;
  name: string;
  /** @format uuid */
  organizationId: UUID;
  /** @format uuid */
  creatorId: UUID;
  isVisible: boolean;
  members: UUID[];
  description: string | null;
  /** @format uuid */
  parentGroupId: UUID | null;
}

export interface GetPresentationSessionsIdPublishedPresentationParams {
  /** @format uuid */
  organizationId?: UUID;
  /** @format uuid */
  id: UUID;
}

export type PatchQuizzesIdQuestionsOrderPayload = UUID[];

export interface GetSearchPackagesByNameParams {
  searchText?: string;
  localizationId?: string;
}

export interface GetSearchPackagesByNameAndDescriptionParams {
  searchText?: string;
  localizationId?: string;
}

export interface PostSearchPackagesPayload {
  /** @format binary */
  importFile: File;
}

export interface PostUploadedFilesPayload {
  /** @format binary */
  file: File;
}

export interface PostUploadedFilesParams {
  /** Enum is used to filter files according to their origin */
  fileTag?: FileTag;
  userFolder?: string;
}

export interface PutGroupsIdUsersFilePayload {
  /** @format binary */
  importFile: File;
}

export interface PostUsersStudentsImportCsvPayload {
  /** @format binary */
  file: File;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Lifeliqe Api
 * @version v1
 *
 * Version: 0.0.21
 */
export class Api<SecurityDataType extends unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  classrooms = {
    /**
     * @description POST_classrooms
     *
     * @tags Lifeliqe.Curriculums.Api.ClassroomEndpoint
     * @name PostClassrooms
     * @summary Create new classroom
     * @request POST:/classrooms
     * @secure
     * @response `200` `ClassroomCreated` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    postClassrooms: (data: CreateNewClassroomRequest, params: RequestParams = {}) =>
      this.http.request<ClassroomCreated, ProblemDetails | void>({
        path: `/classrooms`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_classrooms
     *
     * @tags Lifeliqe.Curriculums.Api.ClassroomEndpoint
     * @name GetClassrooms
     * @summary Get all organization classrooms
     * @request GET:/classrooms
     * @secure
     * @response `200` `(Classroom)[]` OK
     * @response `404` `void` Not Found
     */
    getClassrooms: (params: RequestParams = {}) =>
      this.http.request<Classroom[], void>({
        path: `/classrooms`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description PUT_classrooms_id
     *
     * @tags Lifeliqe.Curriculums.Api.ClassroomEndpoint
     * @name PutClassroomsId
     * @summary Update classroom
     * @request PUT:/classrooms/{id}
     * @secure
     * @response `200` `ClassroomModified` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    putClassroomsId: (id: UUID, data: ModifyClassroomRequest, params: RequestParams = {}) =>
      this.http.request<ClassroomModified, ProblemDetails | void>({
        path: `/classrooms/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description DELETE_classrooms_id
     *
     * @tags Lifeliqe.Curriculums.Api.ClassroomEndpoint
     * @name DeleteClassroomsId
     * @summary Delete classroom
     * @request DELETE:/classrooms/{id}
     * @secure
     * @response `200` `ClassroomDeleted` OK
     * @response `404` `void` Not Found
     */
    deleteClassroomsId: (id: UUID, params: RequestParams = {}) =>
      this.http.request<ClassroomDeleted, void>({
        path: `/classrooms/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_classrooms_id
     *
     * @tags Lifeliqe.Curriculums.Api.ClassroomEndpoint
     * @name GetClassroomsId
     * @summary Get classroom by id
     * @request GET:/classrooms/{id}
     * @secure
     * @response `200` `Classroom` OK
     * @response `404` `void` Not Found
     */
    getClassroomsId: (id: UUID, params: RequestParams = {}) =>
      this.http.request<Classroom, void>({
        path: `/classrooms/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_classrooms_users_id
     *
     * @tags Lifeliqe.Curriculums.Api.ClassroomEndpoint
     * @name GetClassroomsUsersId
     * @summary Get all classrooms for specific user
     * @request GET:/classrooms/users/{id}
     * @secure
     * @response `200` `(Classroom)[]` OK
     * @response `404` `void` Not Found
     */
    getClassroomsUsersId: (id: UUID, params: RequestParams = {}) =>
      this.http.request<Classroom[], void>({
        path: `/classrooms/users/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_classrooms_owned
     *
     * @tags Lifeliqe.Curriculums.Api.ClassroomEndpoint
     * @name GetClassroomsOwned
     * @summary Get all classrooms made by currently logged-in user
     * @request GET:/classrooms/owned
     * @secure
     * @response `200` `(Classroom)[]` OK
     * @response `404` `void` Not Found
     */
    getClassroomsOwned: (params: RequestParams = {}) =>
      this.http.request<Classroom[], void>({
        path: `/classrooms/owned`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description PATCH_classrooms_classroomId_users_userId_progress
     *
     * @tags Lifeliqe.Curriculums.Api.CurriculumProgressEndpoint
     * @name PatchClassroomsClassroomIdUsersUserIdProgress
     * @summary Update user progress in curriculum
     * @request PATCH:/classrooms/{classroomId}/users/{userId}/progress
     * @secure
     * @response `200` `UserCurriculumProgressUpdated` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    patchClassroomsClassroomIdUsersUserIdProgress: (
      classroomId: UUID,
      userId: UUID,
      data: FinishActivityRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<UserCurriculumProgressUpdated, ProblemDetails | void>({
        path: `/classrooms/${classroomId}/users/${userId}/progress`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_classrooms_classroomId_users_userId_progress
     *
     * @tags Lifeliqe.Curriculums.Api.CurriculumProgressEndpoint
     * @name GetClassroomsClassroomIdUsersUserIdProgress
     * @summary Get user progress in curriculum
     * @request GET:/classrooms/{classroomId}/users/{userId}/progress
     * @secure
     * @response `200` `CurriculumWithUserProgress` OK
     * @response `404` `void` Not Found
     */
    getClassroomsClassroomIdUsersUserIdProgress: (classroomId: UUID, userId: UUID, params: RequestParams = {}) =>
      this.http.request<CurriculumWithUserProgress, void>({
        path: `/classrooms/${classroomId}/users/${userId}/progress`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description DELETE_classrooms_classroomId_users_userId_progress_activities
     *
     * @tags Lifeliqe.Curriculums.Api.CurriculumProgressEndpoint
     * @name DeleteClassroomsClassroomIdUsersUserIdProgressActivities
     * @summary Undo user progress in curriculum
     * @request DELETE:/classrooms/{classroomId}/users/{userId}/progress/activities
     * @secure
     * @response `200` `UserCurriculumProgressUpdated` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    deleteClassroomsClassroomIdUsersUserIdProgressActivities: (
      classroomId: UUID,
      userId: UUID,
      data: RemoveActivityProgressRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<UserCurriculumProgressUpdated, ProblemDetails | void>({
        path: `/classrooms/${classroomId}/users/${userId}/progress/activities`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_classrooms_id_progress
     *
     * @tags Lifeliqe.Curriculums.Api.CurriculumProgressEndpoint
     * @name GetClassroomsIdProgress
     * @summary Get class curriculum progress
     * @request GET:/classrooms/{id}/progress
     * @secure
     * @response `200` `CurriculumWithClassProgress` OK
     * @response `404` `void` Not Found
     */
    getClassroomsIdProgress: (id: UUID, params: RequestParams = {}) =>
      this.http.request<CurriculumWithClassProgress, void>({
        path: `/classrooms/${id}/progress`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_classrooms_classroomId_lessons_lessonId_activities_activityId_progress
     *
     * @tags Lifeliqe.Curriculums.Api.CurriculumProgressEndpoint
     * @name GetClassroomsClassroomIdLessonsLessonIdActivitiesActivityIdProgress
     * @summary Get class progress for specific activity
     * @request GET:/classrooms/{classroomId}/lessons/{lessonId}/activities/{activityId}/progress
     * @secure
     * @response `200` `ActivityWithClassProgressAndFinishedUsers` OK
     * @response `404` `void` Not Found
     */
    getClassroomsClassroomIdLessonsLessonIdActivitiesActivityIdProgress: (
      classroomId: UUID,
      lessonId: UUID,
      activityId: UUID,
      params: RequestParams = {},
    ) =>
      this.http.request<ActivityWithClassProgressAndFinishedUsers, void>({
        path: `/classrooms/${classroomId}/lessons/${lessonId}/activities/${activityId}/progress`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  curriculums = {
    /**
     * @description POST_curriculums
     *
     * @tags Lifeliqe.Curriculums.Api.CurriculumEndpoint
     * @name PostCurriculums
     * @summary Create new curriculum
     * @request POST:/curriculums
     * @secure
     * @response `200` `CurriculumCreated` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    postCurriculums: (data: CreateNewCurriculumRequest, params: RequestParams = {}) =>
      this.http.request<CurriculumCreated, ProblemDetails | void>({
        path: `/curriculums`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description POST_curriculums_id_public
     *
     * @tags Lifeliqe.Curriculums.Api.CurriculumEndpoint
     * @name PostCurriculumsIdPublic
     * @summary Mark curriculum as public, so others users in the organization can use it as a template
     * @request POST:/curriculums/{id}/public
     * @secure
     * @response `200` `CurriculumPublished` OK
     * @response `404` `void` Not Found
     */
    postCurriculumsIdPublic: (id: UUID, params: RequestParams = {}) =>
      this.http.request<CurriculumPublished, void>({
        path: `/curriculums/${id}/public`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description DELETE_curriculums_id_public
     *
     * @tags Lifeliqe.Curriculums.Api.CurriculumEndpoint
     * @name DeleteCurriculumsIdPublic
     * @summary Mark curriculum as private
     * @request DELETE:/curriculums/{id}/public
     * @secure
     * @response `200` `CurriculumUnpublished` OK
     * @response `404` `void` Not Found
     */
    deleteCurriculumsIdPublic: (id: UUID, params: RequestParams = {}) =>
      this.http.request<CurriculumUnpublished, void>({
        path: `/curriculums/${id}/public`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description POST_curriculums_id_copy
     *
     * @tags Lifeliqe.Curriculums.Api.CurriculumEndpoint
     * @name PostCurriculumsIdCopy
     * @summary Create new curriculum based on another one
     * @request POST:/curriculums/{id}/copy
     * @secure
     * @response `200` `CurriculumCreated` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    postCurriculumsIdCopy: (id: UUID, data: CopyCurriculumRequest, params: RequestParams = {}) =>
      this.http.request<CurriculumCreated, ProblemDetails | void>({
        path: `/curriculums/${id}/copy`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_curriculums_id
     *
     * @tags Lifeliqe.Curriculums.Api.CurriculumEndpoint
     * @name GetCurriculumsId
     * @summary Get curriculum by id
     * @request GET:/curriculums/{id}
     * @secure
     * @response `200` `Curriculum` OK
     * @response `404` `void` Not Found
     */
    getCurriculumsId: (id: UUID, params: RequestParams = {}) =>
      this.http.request<Curriculum, void>({
        path: `/curriculums/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description PUT_curriculums_id
     *
     * @tags Lifeliqe.Curriculums.Api.CurriculumEndpoint
     * @name PutCurriculumsId
     * @summary Update existing curriculum
     * @request PUT:/curriculums/{id}
     * @secure
     * @response `200` `CurriculumModified` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    putCurriculumsId: (id: UUID, data: UpdateCurriculumRequest, params: RequestParams = {}) =>
      this.http.request<CurriculumModified, ProblemDetails | void>({
        path: `/curriculums/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description DELETE_curriculums_id
     *
     * @tags Lifeliqe.Curriculums.Api.CurriculumEndpoint
     * @name DeleteCurriculumsId
     * @summary Delete curriculum
     * @request DELETE:/curriculums/{id}
     * @secure
     * @response `200` `CurriculumDeleted` OK
     * @response `404` `void` Not Found
     */
    deleteCurriculumsId: (id: UUID, params: RequestParams = {}) =>
      this.http.request<CurriculumDeleted, void>({
        path: `/curriculums/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_curriculums_public
     *
     * @tags Lifeliqe.Curriculums.Api.CurriculumEndpoint
     * @name GetCurriculumsPublic
     * @summary Get all public curriculums
     * @request GET:/curriculums/public
     * @secure
     * @response `200` `(Curriculum)[]` OK
     * @response `404` `void` Not Found
     */
    getCurriculumsPublic: (params: RequestParams = {}) =>
      this.http.request<Curriculum[], void>({
        path: `/curriculums/public`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description POST_curriculums_id_lessons
     *
     * @tags Lifeliqe.Curriculums.Api.CurriculumEndpoint
     * @name PostCurriculumsIdLessons
     * @summary Add lesson plan to curriculum
     * @request POST:/curriculums/{id}/lessons
     * @secure
     * @response `200` `LessonAddedToCurriculum` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    postCurriculumsIdLessons: (id: UUID, data: AddLessonToCurriculumRequest, params: RequestParams = {}) =>
      this.http.request<LessonAddedToCurriculum, ProblemDetails | void>({
        path: `/curriculums/${id}/lessons`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_curriculums_curriculumId_lessons_lessonId
     *
     * @tags Lifeliqe.Curriculums.Api.CurriculumEndpoint
     * @name GetCurriculumsCurriculumIdLessonsLessonId
     * @summary Get lesson by id
     * @request GET:/curriculums/{curriculumId}/lessons/{lessonId}
     * @secure
     * @response `200` `Lesson` OK
     * @response `404` `void` Not Found
     */
    getCurriculumsCurriculumIdLessonsLessonId: (curriculumId: UUID, lessonId: UUID, params: RequestParams = {}) =>
      this.http.request<Lesson, void>({
        path: `/curriculums/${curriculumId}/lessons/${lessonId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description PUT_curriculums_curriculumId_lessons_lessonId
     *
     * @tags Lifeliqe.Curriculums.Api.CurriculumEndpoint
     * @name PutCurriculumsCurriculumIdLessonsLessonId
     * @summary Update lesson in curriculum
     * @request PUT:/curriculums/{curriculumId}/lessons/{lessonId}
     * @secure
     * @response `200` `LessonModified` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    putCurriculumsCurriculumIdLessonsLessonId: (
      curriculumId: UUID,
      lessonId: UUID,
      data: ModifyLessonRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<LessonModified, ProblemDetails | void>({
        path: `/curriculums/${curriculumId}/lessons/${lessonId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description DELETE_curriculums_curriculumId_lessons_lessonId
     *
     * @tags Lifeliqe.Curriculums.Api.CurriculumEndpoint
     * @name DeleteCurriculumsCurriculumIdLessonsLessonId
     * @summary Delete lesson from curriculum
     * @request DELETE:/curriculums/{curriculumId}/lessons/{lessonId}
     * @secure
     * @response `200` `LessonDeletedFromCurriculum` OK
     * @response `404` `void` Not Found
     */
    deleteCurriculumsCurriculumIdLessonsLessonId: (curriculumId: UUID, lessonId: UUID, params: RequestParams = {}) =>
      this.http.request<LessonDeletedFromCurriculum, void>({
        path: `/curriculums/${curriculumId}/lessons/${lessonId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description PATCH_curriculums_id_lessons_order
     *
     * @tags Lifeliqe.Curriculums.Api.CurriculumEndpoint
     * @name PatchCurriculumsIdLessonsOrder
     * @summary Update lesson order in curriculum
     * @request PATCH:/curriculums/{id}/lessons/order
     * @secure
     * @response `200` `LessonOrderChanged` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    patchCurriculumsIdLessonsOrder: (id: UUID, data: ChangeLessonOrderRequest, params: RequestParams = {}) =>
      this.http.request<LessonOrderChanged, ProblemDetails | void>({
        path: `/curriculums/${id}/lessons/order`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description POST_curriculums_curriculumId_lessons_lessonId_activities
     *
     * @tags Lifeliqe.Curriculums.Api.CurriculumEndpoint
     * @name PostCurriculumsCurriculumIdLessonsLessonIdActivities
     * @summary Add new activity to lesson
     * @request POST:/curriculums/{curriculumId}/lessons/{lessonId}/activities
     * @secure
     * @response `200` `ActivityAddedToLesson` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    postCurriculumsCurriculumIdLessonsLessonIdActivities: (
      curriculumId: UUID,
      lessonId: UUID,
      data: AddActivityToLessonRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<ActivityAddedToLesson, ProblemDetails | void>({
        path: `/curriculums/${curriculumId}/lessons/${lessonId}/activities`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description DELETE_curriculums_curriculumId_lessons_lessonId_activities_activityId
     *
     * @tags Lifeliqe.Curriculums.Api.CurriculumEndpoint
     * @name DeleteCurriculumsCurriculumIdLessonsLessonIdActivitiesActivityId
     * @summary Delete activity from lesson
     * @request DELETE:/curriculums/{curriculumId}/lessons/{lessonId}/activities/{activityId}
     * @secure
     * @response `200` `ActivityDeletedFromLesson` OK
     * @response `404` `void` Not Found
     */
    deleteCurriculumsCurriculumIdLessonsLessonIdActivitiesActivityId: (
      curriculumId: UUID,
      lessonId: UUID,
      activityId: UUID,
      params: RequestParams = {},
    ) =>
      this.http.request<ActivityDeletedFromLesson, void>({
        path: `/curriculums/${curriculumId}/lessons/${lessonId}/activities/${activityId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_curriculums_curriculumId_lessons_lessonId_activities_activityId
     *
     * @tags Lifeliqe.Curriculums.Api.CurriculumEndpoint
     * @name GetCurriculumsCurriculumIdLessonsLessonIdActivitiesActivityId
     * @summary Get activity by id
     * @request GET:/curriculums/{curriculumId}/lessons/{lessonId}/activities/{activityId}
     * @secure
     * @response `200` `Activity` OK
     * @response `404` `void` Not Found
     */
    getCurriculumsCurriculumIdLessonsLessonIdActivitiesActivityId: (
      curriculumId: UUID,
      lessonId: UUID,
      activityId: UUID,
      params: RequestParams = {},
    ) =>
      this.http.request<Activity, void>({
        path: `/curriculums/${curriculumId}/lessons/${lessonId}/activities/${activityId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description PUT_curriculums_curriculumId_lessons_lessonId_activities_activityId
     *
     * @tags Lifeliqe.Curriculums.Api.CurriculumEndpoint
     * @name PutCurriculumsCurriculumIdLessonsLessonIdActivitiesActivityId
     * @summary Modify activity
     * @request PUT:/curriculums/{curriculumId}/lessons/{lessonId}/activities/{activityId}
     * @secure
     * @response `200` `ActivityModified` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    putCurriculumsCurriculumIdLessonsLessonIdActivitiesActivityId: (
      curriculumId: UUID,
      lessonId: UUID,
      activityId: UUID,
      data: ModifyActivityRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<ActivityModified, ProblemDetails | void>({
        path: `/curriculums/${curriculumId}/lessons/${lessonId}/activities/${activityId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description PATCH_curriculums_curriculumId_lessons_lessonId_activities_order
     *
     * @tags Lifeliqe.Curriculums.Api.CurriculumEndpoint
     * @name PatchCurriculumsCurriculumIdLessonsLessonIdActivitiesOrder
     * @summary Update activity order in lesson
     * @request PATCH:/curriculums/{curriculumId}/lessons/{lessonId}/activities/order
     * @secure
     * @response `200` `ActivityOrderChanged` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    patchCurriculumsCurriculumIdLessonsLessonIdActivitiesOrder: (
      curriculumId: UUID,
      lessonId: UUID,
      data: ChangeActivityOrderRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<ActivityOrderChanged, ProblemDetails | void>({
        path: `/curriculums/${curriculumId}/lessons/${lessonId}/activities/order`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  interactiveDocuments = {
    /**
     * @description POST_interactive_documents
     *
     * @tags Lifeliqe.InteractiveDocuments.Api.InteractiveDocumentsEndpoint
     * @name PostInteractiveDocuments
     * @summary Create a new Interactive Document
     * @request POST:/interactive-documents
     * @secure
     * @response `200` `InteractiveDocumentCreated` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    postInteractiveDocuments: (data: CreateInteractiveDocumentRequest, params: RequestParams = {}) =>
      this.http.request<InteractiveDocumentCreated, ProblemDetails | void>({
        path: `/interactive-documents`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_interactive_documents_id
     *
     * @tags Lifeliqe.InteractiveDocuments.Api.InteractiveDocumentsEndpoint
     * @name GetInteractiveDocumentsId
     * @summary Get an Interactive Document
     * @request GET:/interactive-documents/{id}
     * @secure
     * @response `200` `InteractiveDocument` OK
     * @response `404` `void` Not Found
     */
    getInteractiveDocumentsId: (id: UUID, params: RequestParams = {}) =>
      this.http.request<InteractiveDocument, void>({
        path: `/interactive-documents/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description PUT_interactive_documents_id
     *
     * @tags Lifeliqe.InteractiveDocuments.Api.InteractiveDocumentsEndpoint
     * @name PutInteractiveDocumentsId
     * @summary Modify an existing Interactive Document
     * @request PUT:/interactive-documents/{id}
     * @secure
     * @response `200` `InteractiveDocumentModified` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    putInteractiveDocumentsId: (id: UUID, data: ModifyInteractiveDocumentRequest, params: RequestParams = {}) =>
      this.http.request<InteractiveDocumentModified, ProblemDetails | void>({
        path: `/interactive-documents/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description DELETE_interactive_documents_id
     *
     * @tags Lifeliqe.InteractiveDocuments.Api.InteractiveDocumentsEndpoint
     * @name DeleteInteractiveDocumentsId
     * @summary Delete an existing Interactive Document
     * @request DELETE:/interactive-documents/{id}
     * @secure
     * @response `200` `InteractiveDocumentDeleted` OK
     * @response `404` `void` Not Found
     */
    deleteInteractiveDocumentsId: (id: UUID, params: RequestParams = {}) =>
      this.http.request<InteractiveDocumentDeleted, void>({
        path: `/interactive-documents/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  users = {
    /**
     * @description GET_users_id_interactive_documents
     *
     * @tags Lifeliqe.InteractiveDocuments.Api.InteractiveDocumentsEndpoint
     * @name GetUsersIdInteractiveDocuments
     * @summary Get all Interactive Documents for specific user
     * @request GET:/users/{id}/interactive-documents
     * @secure
     * @response `200` `(InteractiveDocument)[]` OK
     * @response `404` `void` Not Found
     */
    getUsersIdInteractiveDocuments: (id: UUID, params: RequestParams = {}) =>
      this.http.request<InteractiveDocument[], void>({
        path: `/users/${id}/interactive-documents`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_users_id_published_interactive_documents
     *
     * @tags Lifeliqe.InteractiveDocuments.Api.InteractiveDocumentsEndpoint
     * @name GetUsersIdPublishedInteractiveDocuments
     * @summary Get all Published Interactive Documents for specific user
     * @request GET:/users/{id}/published-interactive-documents
     * @secure
     * @response `200` `(PublishedInteractiveDocument)[]` OK
     * @response `404` `void` Not Found
     */
    getUsersIdPublishedInteractiveDocuments: (id: UUID, params: RequestParams = {}) =>
      this.http.request<PublishedInteractiveDocument[], void>({
        path: `/users/${id}/published-interactive-documents`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_users_id_assigned_licenses
     *
     * @tags Lifeliqe.Licenses.Api.LicensesEndpoint
     * @name GetUsersIdAssignedLicenses
     * @summary Get all licenses assigned to certain user.
     * @request GET:/users/{id}/assigned-licenses
     * @secure
     * @response `200` `(string)[]` OK
     * @response `404` `void` Not Found
     */
    getUsersIdAssignedLicenses: (id: UUID, params: RequestParams = {}) =>
      this.http.request<string[], void>({
        path: `/users/${id}/assigned-licenses`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description POST_users_id_assigned_licenses
     *
     * @tags Lifeliqe.Licenses.Api.LicensesEndpoint
     * @name PostUsersIdAssignedLicenses
     * @summary Assign license to user
     * @request POST:/users/{id}/assigned-licenses
     * @secure
     * @response `200` `LicenseAssignedToUser` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    postUsersIdAssignedLicenses: (id: UUID, data: AssignLicenseToUserRequest, params: RequestParams = {}) =>
      this.http.request<LicenseAssignedToUser, ProblemDetails | void>({
        path: `/users/${id}/assigned-licenses`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_users_products
     *
     * @tags Lifeliqe.Licenses.Api.LicensesEndpoint
     * @name GetUsersProducts
     * @summary Get all products for user
     * @request GET:/users/products
     * @secure
     * @response `200` `AllUserProductsResponse` OK
     * @response `404` `void` Not Found
     */
    getUsersProducts: (params: RequestParams = {}) =>
      this.http.request<AllUserProductsResponse, void>({
        path: `/users/products`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_users_id_products
     *
     * @tags Lifeliqe.Licenses.Api.LicensesEndpoint
     * @name GetUsersIdProducts
     * @summary Get all products for specific user
     * @request GET:/users/{id}/products
     * @secure
     * @response `200` `AllUserProductsResponse` OK
     * @response `404` `void` Not Found
     */
    getUsersIdProducts: (id: UUID, params: RequestParams = {}) =>
      this.http.request<AllUserProductsResponse, void>({
        path: `/users/${id}/products`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description DELETE_users_id_assigned_licenses_licenseName
     *
     * @tags Lifeliqe.Licenses.Api.LicensesEndpoint
     * @name DeleteUsersIdAssignedLicensesLicenseName
     * @summary Unassign license from user
     * @request DELETE:/users/{id}/assigned-licenses/{licenseName}
     * @secure
     * @response `200` `LicenseUnassignedFromUser` OK
     * @response `404` `void` Not Found
     */
    deleteUsersIdAssignedLicensesLicenseName: (id: UUID, licenseName: string, params: RequestParams = {}) =>
      this.http.request<LicenseUnassignedFromUser, void>({
        path: `/users/${id}/assigned-licenses/${licenseName}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_users_id_presentation_sessions
     *
     * @tags Lifeliqe.Presentations.Api.PresentationSessionEndpoint
     * @name GetUsersIdPresentationSessions
     * @summary Get all PresentationSessions for specific user
     * @request GET:/users/{id}/presentation-sessions
     * @secure
     * @response `200` `(PresentationSession)[]` OK
     * @response `404` `void` Not Found
     */
    getUsersIdPresentationSessions: (id: UUID, params: RequestParams = {}) =>
      this.http.request<PresentationSession[], void>({
        path: `/users/${id}/presentation-sessions`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_users_id_presentations
     *
     * @tags Lifeliqe.Presentations.Api.PresentationsEndpoint
     * @name GetUsersIdPresentations
     * @summary Get all Presentations for specific user
     * @request GET:/users/{id}/presentations
     * @secure
     * @response `200` `(Presentation)[]` OK
     * @response `404` `void` Not Found
     */
    getUsersIdPresentations: (id: UUID, params: RequestParams = {}) =>
      this.http.request<Presentation[], void>({
        path: `/users/${id}/presentations`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_users_id_published_presentations
     *
     * @tags Lifeliqe.Presentations.Api.PresentationsEndpoint
     * @name GetUsersIdPublishedPresentations
     * @summary Get all Published Presentations for specific user
     * @request GET:/users/{id}/published-presentations
     * @secure
     * @response `200` `(PublishedPresentation)[]` OK
     * @response `404` `void` Not Found
     */
    getUsersIdPublishedPresentations: (id: UUID, params: RequestParams = {}) =>
      this.http.request<PublishedPresentation[], void>({
        path: `/users/${id}/published-presentations`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_users_id_uploaded_files
     *
     * @tags Lifeliqe.UploadedFiles.Api.UploadedFilesEndpoint
     * @name GetUsersIdUploadedFiles
     * @summary Get file infos for specific User
     * @request GET:/users/{id}/uploaded-files
     * @secure
     * @response `200` `(UploadedFile)[]` OK
     * @response `404` `void` Not Found
     */
    getUsersIdUploadedFiles: (id: UUID, params: RequestParams = {}) =>
      this.http.request<UploadedFile[], void>({
        path: `/users/${id}/uploaded-files`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_users_id_uploaded_files_fileTag
     *
     * @tags Lifeliqe.UploadedFiles.Api.UploadedFilesEndpoint
     * @name GetUsersIdUploadedFilesFileTag
     * @summary Get Files by tag for user
     * @request GET:/users/{id}/uploaded-files/{fileTag}
     * @secure
     * @response `200` `(UploadedFile)[]` OK
     * @response `404` `void` Not Found
     */
    getUsersIdUploadedFilesFileTag: (id: UUID, fileTag: FileTag, params: RequestParams = {}) =>
      this.http.request<UploadedFile[], void>({
        path: `/users/${id}/uploaded-files/${fileTag}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_users_creatorId_groups
     *
     * @tags Lifeliqe.Users.Api.GroupsEndpoint
     * @name GetUsersCreatorIdGroups
     * @summary Get all groups created by defined user
     * @request GET:/users/{creatorId}/groups
     * @secure
     * @response `200` `(Group)[]` OK
     * @response `404` `void` Not Found
     */
    getUsersCreatorIdGroups: (creatorId: UUID, params: RequestParams = {}) =>
      this.http.request<Group[], void>({
        path: `/users/${creatorId}/groups`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_users_id
     *
     * @tags Lifeliqe.Users.Api.UsersEndpoint
     * @name GetUsersId
     * @summary Get existing user by id
     * @request GET:/users/{id}
     * @secure
     * @response `200` `User` OK
     * @response `404` `void` Not Found
     */
    getUsersId: (id: UUID, params: RequestParams = {}) =>
      this.http.request<User, void>({
        path: `/users/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_users
     *
     * @tags Lifeliqe.Users.Api.UsersEndpoint
     * @name GetUsers
     * @summary Get all users from an organization
     * @request GET:/users
     * @secure
     * @response `200` `(User)[]` OK
     * @response `404` `void` Not Found
     */
    getUsers: (params: RequestParams = {}) =>
      this.http.request<User[], void>({
        path: `/users`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description POST_users
     *
     * @tags Lifeliqe.Users.Api.UsersEndpoint
     * @name PostUsers
     * @summary Create new user
     * @request POST:/users
     * @secure
     * @response `200` `UserCreated` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    postUsers: (data: CreateUserRequest, params: RequestParams = {}) =>
      this.http.request<UserCreated, ProblemDetails | void>({
        path: `/users`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description PUT_users_role
     *
     * @tags Lifeliqe.Users.Api.UsersEndpoint
     * @name PutUsersRole
     * @summary Update users role
     * @request PUT:/users/role
     * @secure
     * @response `200` `UserRolesUpdated` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    putUsersRole: (data: UpdateUsersRoleRequest, params: RequestParams = {}) =>
      this.http.request<UserRolesUpdated, ProblemDetails | void>({
        path: `/users/role`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
 * @description POST_users_students_import_csv
 *
 * @tags Lifeliqe.Users.Api.UsersEndpoint
 * @name PostUsersStudentsImportCsv
 * @summary Import users from CSV file
CSV format:
    FirstName, LastName, AdminEmail
 * @request POST:/users/students/import/csv
 * @secure
 * @response `200` `UsersImportedFromCsv` OK
 * @response `404` `void` Not Found
 */
    postUsersStudentsImportCsv: (data: PostUsersStudentsImportCsvPayload, params: RequestParams = {}) =>
      this.http.request<UsersImportedFromCsv, void>({
        path: `/users/students/import/csv`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * @description POST_users_password_check
     *
     * @tags Lifeliqe.Users.Api.UsersEndpoint
     * @name PostUsersPasswordCheck
     * @summary Check if password is valid
     * @request POST:/users/password/check
     * @secure
     * @response `204` `void` No Content
     * @response `400` `ProblemDetails` Bad Request
     */
    postUsersPasswordCheck: (data: CheckPasswordRequest, params: RequestParams = {}) =>
      this.http.request<void, ProblemDetails>({
        path: `/users/password/check`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description POST_users_id_activation_email_resend_request
     *
     * @tags Lifeliqe.Users.Api.UsersEndpoint
     * @name PostUsersIdActivationEmailResendRequest
     * @summary Request new user activation email
     * @request POST:/users/{id}/activation-email-resend-request
     * @secure
     * @response `200` `UserActivationEmailResended` OK
     * @response `404` `void` Not Found
     */
    postUsersIdActivationEmailResendRequest: (id: UUID, params: RequestParams = {}) =>
      this.http.request<UserActivationEmailResended, void>({
        path: `/users/${id}/activation-email-resend-request`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  publishedInteractiveDocuments = {
    /**
     * @description POST_published_interactive_documents
     *
     * @tags Lifeliqe.InteractiveDocuments.Api.InteractiveDocumentsEndpoint
     * @name PostPublishedInteractiveDocuments
     * @summary Publish Interactive Document
     * @request POST:/published-interactive-documents
     * @secure
     * @response `200` `InteractiveDocumentPublished` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    postPublishedInteractiveDocuments: (data: PublishInteractiveDocumentRequest, params: RequestParams = {}) =>
      this.http.request<InteractiveDocumentPublished, ProblemDetails | void>({
        path: `/published-interactive-documents`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_published_interactive_documents_id
     *
     * @tags Lifeliqe.InteractiveDocuments.Api.InteractiveDocumentsEndpoint
     * @name GetPublishedInteractiveDocumentsId
     * @summary Get a specific Published Interactive Document
     * @request GET:/published-interactive-documents/{id}
     * @secure
     * @response `200` `PublishedInteractiveDocument` OK
     * @response `404` `void` Not Found
     */
    getPublishedInteractiveDocumentsId: (id: UUID, params: RequestParams = {}) =>
      this.http.request<PublishedInteractiveDocument, void>({
        path: `/published-interactive-documents/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  organizationLicenses = {
    /**
     * @description Admins will see only licenses for their organization
     *
     * @tags Lifeliqe.Licenses.Api.LicensesEndpoint
     * @name GetOrganizationLicenses
     * @summary See all license count of specific organization
     * @request GET:/organization-licenses
     * @secure
     * @response `200` `(LicenseCount)[]` OK
     * @response `404` `void` Not Found
     */
    getOrganizationLicenses: (params: RequestParams = {}) =>
      this.http.request<LicenseCount[], void>({
        path: `/organization-licenses`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  assignedLicenses = {
    /**
     * @description Admins will see only licenses and users for their organization
     *
     * @tags Lifeliqe.Licenses.Api.LicensesEndpoint
     * @name GetAssignedLicensesLicenseNameUsers
     * @summary Get Users with AssignedLicense
     * @request GET:/assigned-licenses/{licenseName}/users
     * @secure
     * @response `200` `(UUID)[]` OK
     * @response `404` `void` Not Found
     */
    getAssignedLicensesLicenseNameUsers: (licenseName: string, params: RequestParams = {}) =>
      this.http.request<UUID[], void>({
        path: `/assigned-licenses/${licenseName}/users`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  availableLicenses = {
    /**
     * @description POST_available_licenses
     *
     * @tags Lifeliqe.Licenses.Api.LicensesEndpoint
     * @name PostAvailableLicenses
     * @summary Import licenses to the system
     * @request POST:/available-licenses
     * @secure
     * @response `200` `(ImportedLicensesCount)[]` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    postAvailableLicenses: (data: ImportLicensesRequest, params: RequestParams = {}) =>
      this.http.request<ImportedLicensesCount[], ProblemDetails | void>({
        path: `/available-licenses`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description DELETE_available_licenses_id
     *
     * @tags Lifeliqe.Licenses.Api.LicensesEndpoint
     * @name DeleteAvailableLicensesId
     * @summary Delete available license
     * @request DELETE:/available-licenses/{id}
     * @secure
     * @response `200` `AvailableLicenseDeleted` OK
     * @response `404` `void` Not Found
     */
    deleteAvailableLicensesId: (id: UUID, params: RequestParams = {}) =>
      this.http.request<AvailableLicenseDeleted, void>({
        path: `/available-licenses/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  licenseTypes = {
    /**
     * @description GET_license_types_id
     *
     * @tags Lifeliqe.Licensing.Api.LicenseTypesEndpoint
     * @name GetLicenseTypesId
     * @summary Returns LicenseType from database by Id
     * @request GET:/license-types/{id}
     * @secure
     * @response `200` `LicenseType` OK
     * @response `404` `void` Not Found
     */
    getLicenseTypesId: (id: UUID, params: RequestParams = {}) =>
      this.http.request<LicenseType, void>({
        path: `/license-types/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description DELETE_license_types_id
     *
     * @tags Lifeliqe.Licensing.Api.LicenseTypesEndpoint
     * @name DeleteLicenseTypesId
     * @summary Delete existing LicenseType
     * @request DELETE:/license-types/{id}
     * @secure
     * @response `200` `LicenseTypeDeactivated` OK
     * @response `404` `void` Not Found
     */
    deleteLicenseTypesId: (id: UUID, params: RequestParams = {}) =>
      this.http.request<LicenseTypeDeactivated, void>({
        path: `/license-types/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_license_types
     *
     * @tags Lifeliqe.Licensing.Api.LicenseTypesEndpoint
     * @name GetLicenseTypes
     * @summary Returns all active LicenseTypes from database
     * @request GET:/license-types
     * @secure
     * @response `200` `(LicenseType)[]` OK
     * @response `404` `void` Not Found
     */
    getLicenseTypes: (params: RequestParams = {}) =>
      this.http.request<LicenseType[], void>({
        path: `/license-types`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description POST_license_types
     *
     * @tags Lifeliqe.Licensing.Api.LicenseTypesEndpoint
     * @name PostLicenseTypes
     * @summary Create a new LicenseType
     * @request POST:/license-types
     * @secure
     * @response `200` `LicenseTypeCreated` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    postLicenseTypes: (data: CreateLicenseTypeRequest, params: RequestParams = {}) =>
      this.http.request<LicenseTypeCreated, ProblemDetails | void>({
        path: `/license-types`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description PUT_license_types_id_name
     *
     * @tags Lifeliqe.Licensing.Api.LicenseTypesEndpoint
     * @name PutLicenseTypesIdName
     * @summary Modify LicenseType name
     * @request PUT:/license-types/{id}/name
     * @secure
     * @response `200` `LicenseTypeModified` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    putLicenseTypesIdName: (id: UUID, data: ModifyLicenseTypeNameRequest, params: RequestParams = {}) =>
      this.http.request<LicenseTypeModified, ProblemDetails | void>({
        path: `/license-types/${id}/name`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description PUT_license_types_id_products
     *
     * @tags Lifeliqe.Licensing.Api.LicenseTypesEndpoint
     * @name PutLicenseTypesIdProducts
     * @summary Modify LicenseType products, not avalaible when LicenseType was already used to create license
     * @request PUT:/license-types/{id}/products
     * @secure
     * @response `200` `LicenseTypeModified` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    putLicenseTypesIdProducts: (id: UUID, data: ModifyLicenseTypeProductsRequest, params: RequestParams = {}) =>
      this.http.request<LicenseTypeModified, ProblemDetails | void>({
        path: `/license-types/${id}/products`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  deactivatedLicenseTypes = {
    /**
     * @description GET_deactivated_license_types
     *
     * @tags Lifeliqe.Licensing.Api.LicenseTypesEndpoint
     * @name GetDeactivatedLicenseTypes
     * @summary Returns all deactivated LicenseTypes from database
     * @request GET:/deactivated-license-types
     * @secure
     * @response `200` `(LicenseType)[]` OK
     * @response `404` `void` Not Found
     */
    getDeactivatedLicenseTypes: (params: RequestParams = {}) =>
      this.http.request<LicenseType[], void>({
        path: `/deactivated-license-types`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  licenses = {
    /**
     * @description GET_licenses_id
     *
     * @tags Lifeliqe.Licensing.Api.LicensesEndpoint
     * @name GetLicensesId
     * @summary Get License from database by Id
     * @request GET:/licenses/{id}
     * @secure
     * @response `200` `License` OK
     * @response `404` `void` Not Found
     */
    getLicensesId: (id: UUID, params: RequestParams = {}) =>
      this.http.request<License, void>({
        path: `/licenses/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description DELETE_licenses_id
     *
     * @tags Lifeliqe.Licensing.Api.LicensesEndpoint
     * @name DeleteLicensesId
     * @summary Deactivate existing License
     * @request DELETE:/licenses/{id}
     * @secure
     * @response `200` `LicenseDeactivated` OK
     * @response `404` `void` Not Found
     */
    deleteLicensesId: (id: UUID, params: RequestParams = {}) =>
      this.http.request<LicenseDeactivated, void>({
        path: `/licenses/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description POST_licenses_exportfile
     *
     * @tags Lifeliqe.Licensing.Api.LicensesEndpoint
     * @name PostLicensesExportfile
     * @summary Returns Licenses export file for offline solution
     * @request POST:/licenses/exportfile
     * @secure
     * @response `200` `IResult` OK
     * @response `404` `void` Not Found
     */
    postLicensesExportfile: (data: ExportLicensesToFileRequest, params: RequestParams = {}) =>
      this.http.request<IResult, void>({
        path: `/licenses/exportfile`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description POST_licenses
     *
     * @tags Lifeliqe.Licensing.Api.LicensesEndpoint
     * @name PostLicenses
     * @summary Create a new License
     * @request POST:/licenses
     * @secure
     * @response `200` `LicenseCreated` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    postLicenses: (data: CreateLicenseRequest, params: RequestParams = {}) =>
      this.http.request<LicenseCreated, ProblemDetails | void>({
        path: `/licenses`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  organizations = {
    /**
     * @description GET_organizations_id_licenses
     *
     * @tags Lifeliqe.Licensing.Api.LicensesEndpoint
     * @name GetOrganizationsIdLicenses
     * @summary Get all active Licenses for specific organization
     * @request GET:/organizations/{id}/licenses
     * @secure
     * @response `200` `(License)[]` OK
     * @response `404` `void` Not Found
     */
    getOrganizationsIdLicenses: (id: UUID, params: RequestParams = {}) =>
      this.http.request<License[], void>({
        path: `/organizations/${id}/licenses`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_organizations_id_deactivated_licenses
     *
     * @tags Lifeliqe.Licensing.Api.LicensesEndpoint
     * @name GetOrganizationsIdDeactivatedLicenses
     * @summary Get all deactivated Licenses for specific organization
     * @request GET:/organizations/{id}/deactivated-licenses
     * @secure
     * @response `200` `(License)[]` OK
     * @response `404` `void` Not Found
     */
    getOrganizationsIdDeactivatedLicenses: (id: UUID, params: RequestParams = {}) =>
      this.http.request<License[], void>({
        path: `/organizations/${id}/deactivated-licenses`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_organizations_id
     *
     * @tags Lifeliqe.Organizations.Api.OrganizationsEndpoint
     * @name GetOrganizationsId
     * @summary Get organization from database by id
     * @request GET:/organizations/{id}
     * @secure
     * @response `200` `Organization` OK
     * @response `404` `void` Not Found
     */
    getOrganizationsId: (id: UUID, params: RequestParams = {}) =>
      this.http.request<Organization, void>({
        path: `/organizations/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description PUT_organizations_id
     *
     * @tags Lifeliqe.Organizations.Api.OrganizationsEndpoint
     * @name PutOrganizationsId
     * @summary Edit existing organization
     * @request PUT:/organizations/{id}
     * @secure
     * @response `200` `OrganizationModified` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    putOrganizationsId: (id: UUID, data: ModifyOrganizationRequest, params: RequestParams = {}) =>
      this.http.request<OrganizationModified, ProblemDetails | void>({
        path: `/organizations/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description DELETE_organizations_id
     *
     * @tags Lifeliqe.Organizations.Api.OrganizationsEndpoint
     * @name DeleteOrganizationsId
     * @summary Deactivate existing organization
     * @request DELETE:/organizations/{id}
     * @secure
     * @response `200` `OrganizationDeactivated` OK
     * @response `404` `void` Not Found
     */
    deleteOrganizationsId: (id: UUID, params: RequestParams = {}) =>
      this.http.request<OrganizationDeactivated, void>({
        path: `/organizations/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_organizations
     *
     * @tags Lifeliqe.Organizations.Api.OrganizationsEndpoint
     * @name GetOrganizations
     * @summary Get all existing organizations from database
     * @request GET:/organizations
     * @secure
     * @response `200` `(Organization)[]` OK
     * @response `404` `void` Not Found
     */
    getOrganizations: (params: RequestParams = {}) =>
      this.http.request<Organization[], void>({
        path: `/organizations`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description POST_organizations
     *
     * @tags Lifeliqe.Organizations.Api.OrganizationsEndpoint
     * @name PostOrganizations
     * @summary Create a new organization
     * @request POST:/organizations
     * @secure
     * @response `200` `OrganizationRegistered` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    postOrganizations: (data: CreateOrganizationRequest, params: RequestParams = {}) =>
      this.http.request<OrganizationRegistered, ProblemDetails | void>({
        path: `/organizations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_organizations_id_config
     *
     * @tags Lifeliqe.Organizations.Api.OrganizationsEndpoint
     * @name GetOrganizationsIdConfig
     * @summary Returns setup file for offline instalation
     * @request GET:/organizations/{id}/config
     * @secure
     * @response `200` `IResult` OK
     * @response `404` `void` Not Found
     */
    getOrganizationsIdConfig: (id: UUID, params: RequestParams = {}) =>
      this.http.request<IResult, void>({
        path: `/organizations/${id}/config`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_organizations_organizationId_users_userId_folder_size
     *
     * @tags Lifeliqe.UploadedFiles.Api.UploadedFilesEndpoint
     * @name GetOrganizationsOrganizationIdUsersUserIdFolderSize
     * @summary Get size of Files of specific User
     * @request GET:/organizations/{organizationId}/users/{userId}/folder-size
     * @secure
     * @response `200` `number` OK
     * @response `404` `void` Not Found
     */
    getOrganizationsOrganizationIdUsersUserIdFolderSize: (
      organizationId: UUID,
      userId: UUID,
      params: RequestParams = {},
    ) =>
      this.http.request<number, void>({
        path: `/organizations/${organizationId}/users/${userId}/folder-size`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_organizations_id_folder_size
     *
     * @tags Lifeliqe.UploadedFiles.Api.UploadedFilesEndpoint
     * @name GetOrganizationsIdFolderSize
     * @summary Get size of Files of specific Organization
     * @request GET:/organizations/{id}/folder-size
     * @secure
     * @response `200` `number` OK
     * @response `404` `void` Not Found
     */
    getOrganizationsIdFolderSize: (id: UUID, params: RequestParams = {}) =>
      this.http.request<number, void>({
        path: `/organizations/${id}/folder-size`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  productPackages = {
    /**
     * @description GET_product_packages_id
     *
     * @tags Lifeliqe.Licensing.Api.ProductsEndpoint
     * @name GetProductPackagesId
     * @summary Get a product package by its ID
     * @request GET:/product-packages/{id}
     * @secure
     * @response `200` `ProductPackage` OK
     * @response `404` `void` Not Found
     */
    getProductPackagesId: (id: UUID, params: RequestParams = {}) =>
      this.http.request<ProductPackage, void>({
        path: `/product-packages/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description DELETE_product_packages_id
     *
     * @tags Lifeliqe.Licensing.Api.ProductsEndpoint
     * @name DeleteProductPackagesId
     * @summary Deactivate product package
     * @request DELETE:/product-packages/{id}
     * @secure
     * @response `200` `ProductPackageDeactivated` OK
     * @response `404` `void` Not Found
     */
    deleteProductPackagesId: (id: UUID, params: RequestParams = {}) =>
      this.http.request<ProductPackageDeactivated, void>({
        path: `/product-packages/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description PUT_product_packages_id
     *
     * @tags Lifeliqe.Licensing.Api.ProductsEndpoint
     * @name PutProductPackagesId
     * @summary Modify a product package
     * @request PUT:/product-packages/{id}
     * @secure
     * @response `200` `ProductPackageModified` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    putProductPackagesId: (id: UUID, data: ModifyProductPackageRequest, params: RequestParams = {}) =>
      this.http.request<ProductPackageModified, ProblemDetails | void>({
        path: `/product-packages/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_product_packages
     *
     * @tags Lifeliqe.Licensing.Api.ProductsEndpoint
     * @name GetProductPackages
     * @summary Get all active product packages
     * @request GET:/product-packages
     * @secure
     * @response `200` `(ProductPackage)[]` OK
     * @response `404` `void` Not Found
     */
    getProductPackages: (params: RequestParams = {}) =>
      this.http.request<ProductPackage[], void>({
        path: `/product-packages`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description POST_product_packages
     *
     * @tags Lifeliqe.Licensing.Api.ProductsEndpoint
     * @name PostProductPackages
     * @summary Create a product package
     * @request POST:/product-packages
     * @secure
     * @response `200` `ProductPackageCreated` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    postProductPackages: (data: CreateProductPackageRequest, params: RequestParams = {}) =>
      this.http.request<ProductPackageCreated, ProblemDetails | void>({
        path: `/product-packages`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description PUT_product_packages_id_is_active
     *
     * @tags Lifeliqe.Licensing.Api.ProductsEndpoint
     * @name PutProductPackagesIdIsActive
     * @summary Activate product package
     * @request PUT:/product-packages/{id}/is-active
     * @secure
     * @response `200` `ProductPackageActivated` OK
     * @response `404` `void` Not Found
     */
    putProductPackagesIdIsActive: (id: UUID, params: RequestParams = {}) =>
      this.http.request<ProductPackageActivated, void>({
        path: `/product-packages/${id}/is-active`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  deactivatedProductPackages = {
    /**
     * @description GET_deactivated_product_packages
     *
     * @tags Lifeliqe.Licensing.Api.ProductsEndpoint
     * @name GetDeactivatedProductPackages
     * @summary Get all deactivated product packages
     * @request GET:/deactivated-product-packages
     * @secure
     * @response `200` `(ProductPackage)[]` OK
     * @response `404` `void` Not Found
     */
    getDeactivatedProductPackages: (params: RequestParams = {}) =>
      this.http.request<ProductPackage[], void>({
        path: `/deactivated-product-packages`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  productFeatures = {
    /**
     * @description GET_product_features_id
     *
     * @tags Lifeliqe.Licensing.Api.ProductsEndpoint
     * @name GetProductFeaturesId
     * @summary Get a product feature by its ID
     * @request GET:/product-features/{id}
     * @secure
     * @response `200` `ProductFeature` OK
     * @response `404` `void` Not Found
     */
    getProductFeaturesId: (id: UUID, params: RequestParams = {}) =>
      this.http.request<ProductFeature, void>({
        path: `/product-features/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description DELETE_product_features_id
     *
     * @tags Lifeliqe.Licensing.Api.ProductsEndpoint
     * @name DeleteProductFeaturesId
     * @summary Deactivate a product feature
     * @request DELETE:/product-features/{id}
     * @secure
     * @response `200` `ProductFeatureDeactivated` OK
     * @response `404` `void` Not Found
     */
    deleteProductFeaturesId: (id: UUID, params: RequestParams = {}) =>
      this.http.request<ProductFeatureDeactivated, void>({
        path: `/product-features/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description PUT_product_features_id
     *
     * @tags Lifeliqe.Licensing.Api.ProductsEndpoint
     * @name PutProductFeaturesId
     * @summary Modify a product feature
     * @request PUT:/product-features/{id}
     * @secure
     * @response `200` `ProductFeatureModified` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    putProductFeaturesId: (id: UUID, data: ModifyProductFeatureRequest, params: RequestParams = {}) =>
      this.http.request<ProductFeatureModified, ProblemDetails | void>({
        path: `/product-features/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_product_features
     *
     * @tags Lifeliqe.Licensing.Api.ProductsEndpoint
     * @name GetProductFeatures
     * @summary Get all active product features
     * @request GET:/product-features
     * @secure
     * @response `200` `(ProductFeature)[]` OK
     * @response `404` `void` Not Found
     */
    getProductFeatures: (params: RequestParams = {}) =>
      this.http.request<ProductFeature[], void>({
        path: `/product-features`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description POST_product_features
     *
     * @tags Lifeliqe.Licensing.Api.ProductsEndpoint
     * @name PostProductFeatures
     * @summary Create a product feature
     * @request POST:/product-features
     * @secure
     * @response `200` `ProductFeatureCreated` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    postProductFeatures: (data: CreateProductFeatureRequest, params: RequestParams = {}) =>
      this.http.request<ProductFeatureCreated, ProblemDetails | void>({
        path: `/product-features`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description PUT_product_features_id_is_active
     *
     * @tags Lifeliqe.Licensing.Api.ProductsEndpoint
     * @name PutProductFeaturesIdIsActive
     * @summary Activate product feature
     * @request PUT:/product-features/{id}/is-active
     * @secure
     * @response `200` `ProductFeatureActivated` OK
     * @response `404` `void` Not Found
     */
    putProductFeaturesIdIsActive: (id: UUID, params: RequestParams = {}) =>
      this.http.request<ProductFeatureActivated, void>({
        path: `/product-features/${id}/is-active`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  deactivatedProductFeatures = {
    /**
     * @description GET_deactivated_product_features
     *
     * @tags Lifeliqe.Licensing.Api.ProductsEndpoint
     * @name GetDeactivatedProductFeatures
     * @summary Get all deactivated product features
     * @request GET:/deactivated-product-features
     * @secure
     * @response `200` `(ProductFeature)[]` OK
     * @response `404` `void` Not Found
     */
    getDeactivatedProductFeatures: (params: RequestParams = {}) =>
      this.http.request<ProductFeature[], void>({
        path: `/deactivated-product-features`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  deactivatedOrganizations = {
    /**
     * @description PUT_deactivated_organizations_id
     *
     * @tags Lifeliqe.Organizations.Api.OrganizationsEndpoint
     * @name PutDeactivatedOrganizationsId
     * @summary Ativate existing deactivated organization
     * @request PUT:/deactivated-organizations/{id}
     * @secure
     * @response `200` `OrganizationActivated` OK
     * @response `404` `void` Not Found
     */
    putDeactivatedOrganizationsId: (id: UUID, params: RequestParams = {}) =>
      this.http.request<OrganizationActivated, void>({
        path: `/deactivated-organizations/${id}`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  presentationSessions = {
    /**
     * @description POST_presentation_sessions
     *
     * @tags Lifeliqe.Presentations.Api.PresentationSessionEndpoint
     * @name PostPresentationSessions
     * @summary Start new PresentationSession from specific Published Presentation
     * @request POST:/presentation-sessions
     * @secure
     * @response `200` `PresentationSessionStarted` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    postPresentationSessions: (data: StartPresentationSessionRequest, params: RequestParams = {}) =>
      this.http.request<PresentationSessionStarted, ProblemDetails | void>({
        path: `/presentation-sessions`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_presentation_sessions_id
     *
     * @tags Lifeliqe.Presentations.Api.PresentationSessionEndpoint
     * @name GetPresentationSessionsId
     * @summary Get specific PresentationSession
     * @request GET:/presentation-sessions/{id}
     * @secure
     * @response `200` `PresentationSession` OK
     * @response `404` `void` Not Found
     */
    getPresentationSessionsId: (id: UUID, params: RequestParams = {}) =>
      this.http.request<PresentationSession, void>({
        path: `/presentation-sessions/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description PUT_presentation_sessions_id
     *
     * @tags Lifeliqe.Presentations.Api.PresentationSessionEndpoint
     * @name PutPresentationSessionsId
     * @summary Send actual page of PressentationSession to all connected users; Websocket listen on "PresentationSessionChanged" and "ConnectionId"
     * @request PUT:/presentation-sessions/{id}
     * @secure
     * @response `200` `PresentationSessionChanged` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    putPresentationSessionsId: (id: UUID, data: ChangePresentationSessionRequest, params: RequestParams = {}) =>
      this.http.request<PresentationSessionChanged, ProblemDetails | void>({
        path: `/presentation-sessions/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description DELETE_presentation_sessions_id
     *
     * @tags Lifeliqe.Presentations.Api.PresentationSessionEndpoint
     * @name DeletePresentationSessionsId
     * @summary Finish and delete specific PresentationSession
     * @request DELETE:/presentation-sessions/{id}
     * @secure
     * @response `200` `PresentationSessionFinished` OK
     * @response `404` `void` Not Found
     */
    deletePresentationSessionsId: (id: UUID, params: RequestParams = {}) =>
      this.http.request<PresentationSessionFinished, void>({
        path: `/presentation-sessions/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description POST_presentation_sessions_connected_users
     *
     * @tags Lifeliqe.Presentations.Api.PresentationSessionEndpoint
     * @name PostPresentationSessionsConnectedUsers
     * @summary Connect user to specific PresentationSession; Websocket listen on "ParticipantsChanged"
     * @request POST:/presentation-sessions/connected-users
     * @secure
     * @response `200` `UserConnectedToSession` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    postPresentationSessionsConnectedUsers: (
      data: ConnectUserToPresentationSessionRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<UserConnectedToSession, ProblemDetails | void>({
        path: `/presentation-sessions/connected-users`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description DELETE_presentation_sessions_connected_users
     *
     * @tags Lifeliqe.Presentations.Api.PresentationSessionEndpoint
     * @name DeletePresentationSessionsConnectedUsers
     * @summary Disconnect user or guest from specific PresentationSession; Websocket listen on "DisconnectUserFromSession" and "ParticipantsChanged"
     * @request DELETE:/presentation-sessions/connected-users
     * @secure
     * @response `200` `UserDisconnectedFromSession` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    deletePresentationSessionsConnectedUsers: (
      data: DisconnectUserFromPresentationSessionRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<UserDisconnectedFromSession, ProblemDetails | void>({
        path: `/presentation-sessions/connected-users`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description POST_presentation_sessions_connected_guests
     *
     * @tags Lifeliqe.Presentations.Api.PresentationSessionEndpoint
     * @name PostPresentationSessionsConnectedGuests
     * @summary Connect guest to specific PresentationSession; Websocket listen on "ParticipantsChanged"
     * @request POST:/presentation-sessions/connected-guests
     * @secure
     * @response `200` `GuestConnectedToSession` OK
     * @response `404` `void` Not Found
     */
    postPresentationSessionsConnectedGuests: (
      data: ConnectGuestToPresentationSessionRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<GuestConnectedToSession, void>({
        path: `/presentation-sessions/connected-guests`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_presentation_sessions_id_published_presentation
     *
     * @tags Lifeliqe.Presentations.Api.PresentationSessionEndpoint
     * @name GetPresentationSessionsIdPublishedPresentation
     * @summary Get presentation for guest of presentation session
     * @request GET:/presentation-sessions/{id}/published-presentation
     * @secure
     * @response `200` `PublishedPresentation` OK
     * @response `404` `void` Not Found
     */
    getPresentationSessionsIdPublishedPresentation: (
      { id, ...query }: GetPresentationSessionsIdPublishedPresentationParams,
      params: RequestParams = {},
    ) =>
      this.http.request<PublishedPresentation, void>({
        path: `/presentation-sessions/${id}/published-presentation`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  presentations = {
    /**
     * @description POST_presentations
     *
     * @tags Lifeliqe.Presentations.Api.PresentationsEndpoint
     * @name PostPresentations
     * @summary Create a new Presentation
     * @request POST:/presentations
     * @secure
     * @response `200` `PresentationCreated` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    postPresentations: (data: CreatePresentationRequest, params: RequestParams = {}) =>
      this.http.request<PresentationCreated, ProblemDetails | void>({
        path: `/presentations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_presentations_id
     *
     * @tags Lifeliqe.Presentations.Api.PresentationsEndpoint
     * @name GetPresentationsId
     * @summary Get a Presentation
     * @request GET:/presentations/{id}
     * @secure
     * @response `200` `Presentation` OK
     * @response `404` `void` Not Found
     */
    getPresentationsId: (id: UUID, params: RequestParams = {}) =>
      this.http.request<Presentation, void>({
        path: `/presentations/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description PUT_presentations_id
     *
     * @tags Lifeliqe.Presentations.Api.PresentationsEndpoint
     * @name PutPresentationsId
     * @summary Modify an existing Presentation
     * @request PUT:/presentations/{id}
     * @secure
     * @response `200` `PresentationModified` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    putPresentationsId: (id: UUID, data: ModifyPresentationRequest, params: RequestParams = {}) =>
      this.http.request<PresentationModified, ProblemDetails | void>({
        path: `/presentations/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description DELETE_presentations_id
     *
     * @tags Lifeliqe.Presentations.Api.PresentationsEndpoint
     * @name DeletePresentationsId
     * @summary Delete an existing Presentation
     * @request DELETE:/presentations/{id}
     * @secure
     * @response `200` `PresentationDeleted` OK
     * @response `404` `void` Not Found
     */
    deletePresentationsId: (id: UUID, params: RequestParams = {}) =>
      this.http.request<PresentationDeleted, void>({
        path: `/presentations/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  publishedPresentations = {
    /**
     * @description POST_published_presentations
     *
     * @tags Lifeliqe.Presentations.Api.PresentationsEndpoint
     * @name PostPublishedPresentations
     * @summary Publish Presentation
     * @request POST:/published-presentations
     * @secure
     * @response `200` `PresentationPublished` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    postPublishedPresentations: (data: PublishPresentationRequest, params: RequestParams = {}) =>
      this.http.request<PresentationPublished, ProblemDetails | void>({
        path: `/published-presentations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_published_presentations_id
     *
     * @tags Lifeliqe.Presentations.Api.PresentationsEndpoint
     * @name GetPublishedPresentationsId
     * @summary Get a specific Published Presentation
     * @request GET:/published-presentations/{id}
     * @secure
     * @response `200` `PublishedPresentation` OK
     * @response `404` `void` Not Found
     */
    getPublishedPresentationsId: (id: UUID, params: RequestParams = {}) =>
      this.http.request<PublishedPresentation, void>({
        path: `/published-presentations/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  quizzes = {
    /**
     * @description POST_quizzes_sessions
     *
     * @tags Lifeliqe.Quizzes.Api.QuizSessionEndpoints
     * @name PostQuizzesSessions
     * @summary Start new session based on assigned quiz instance
     * @request POST:/quizzes/sessions
     * @secure
     * @response `200` `QuizSessionStarted` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    postQuizzesSessions: (data: StartQuizSessionRequest, params: RequestParams = {}) =>
      this.http.request<QuizSessionStarted, ProblemDetails | void>({
        path: `/quizzes/sessions`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_quizzes_sessions
     *
     * @tags Lifeliqe.Quizzes.Api.QuizSessionEndpoints
     * @name GetQuizzesSessions
     * @summary Get open sessions for student
     * @request GET:/quizzes/sessions
     * @secure
     * @response `200` `(QuizSessionResponse)[]` OK
     * @response `404` `void` Not Found
     */
    getQuizzesSessions: (params: RequestParams = {}) =>
      this.http.request<QuizSessionResponse[], void>({
        path: `/quizzes/sessions`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description POST_quizzes_sessions_quizSessionId_questions_answers
     *
     * @tags Lifeliqe.Quizzes.Api.QuizSessionEndpoints
     * @name PostQuizzesSessionsQuizSessionIdQuestionsAnswers
     * @summary Submit answer for question in quiz session
     * @request POST:/quizzes/sessions/{quizSessionId}/questions/answers
     * @secure
     * @response `200` `AnswerSubmittedResponse` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    postQuizzesSessionsQuizSessionIdQuestionsAnswers: (
      quizSessionId: UUID,
      data: SubmitAnswerRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<AnswerSubmittedResponse, ProblemDetails | void>({
        path: `/quizzes/sessions/${quizSessionId}/questions/answers`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_quizzes_sessions_quizSessionId_status
     *
     * @tags Lifeliqe.Quizzes.Api.QuizSessionEndpoints
     * @name GetQuizzesSessionsQuizSessionIdStatus
     * @summary Get current status of certain quiz session
     * @request GET:/quizzes/sessions/{quizSessionId}/status
     * @secure
     * @response `200` `QuizSessionStatus` OK
     * @response `404` `void` Not Found
     */
    getQuizzesSessionsQuizSessionIdStatus: (quizSessionId: UUID, params: RequestParams = {}) =>
      this.http.request<QuizSessionStatus, void>({
        path: `/quizzes/sessions/${quizSessionId}/status`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description POST_quizzes_sessions_quizSessionId_submission
     *
     * @tags Lifeliqe.Quizzes.Api.QuizSessionEndpoints
     * @name PostQuizzesSessionsQuizSessionIdSubmission
     * @summary Submit (Finish) the quiz session.
     * @request POST:/quizzes/sessions/{quizSessionId}/submission
     * @secure
     * @response `200` `QuizSessionSubmitted` OK
     * @response `404` `void` Not Found
     */
    postQuizzesSessionsQuizSessionIdSubmission: (quizSessionId: UUID, params: RequestParams = {}) =>
      this.http.request<QuizSessionSubmitted, void>({
        path: `/quizzes/sessions/${quizSessionId}/submission`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_quizzes_sessions_results_id_with_answers
     *
     * @tags Lifeliqe.Quizzes.Api.QuizSessionEndpoints
     * @name GetQuizzesSessionsResultsIdWithAnswers
     * @summary Get session result with correct answers
     * @request GET:/quizzes/sessions/results/{id}/with-answers
     * @secure
     * @response `200` `QuizSessionResultResponse` OK
     * @response `404` `void` Not Found
     */
    getQuizzesSessionsResultsIdWithAnswers: (id: UUID, params: RequestParams = {}) =>
      this.http.request<QuizSessionResultResponse, void>({
        path: `/quizzes/sessions/results/${id}/with-answers`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_quizzes_sessions_results_id_without_answers
     *
     * @tags Lifeliqe.Quizzes.Api.QuizSessionEndpoints
     * @name GetQuizzesSessionsResultsIdWithoutAnswers
     * @summary Get session result without correct answers
     * @request GET:/quizzes/sessions/results/{id}/without-answers
     * @secure
     * @response `200` `QuizSessionResultWithoutCorrectAnswerResponse` OK
     * @response `404` `void` Not Found
     */
    getQuizzesSessionsResultsIdWithoutAnswers: (id: UUID, params: RequestParams = {}) =>
      this.http.request<QuizSessionResultWithoutCorrectAnswerResponse, void>({
        path: `/quizzes/sessions/results/${id}/without-answers`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint was created primary for interactive documents and presentations
     *
     * @tags Lifeliqe.Quizzes.Api.QuizSessionEndpoints
     * @name PostQuizzesInstancesIdSubmission
     * @summary Submit quiz solution without explicitly starting the session
     * @request POST:/quizzes/instances/{id}/submission
     * @secure
     * @response `200` `QuizSessionSubmitted` OK
     * @response `404` `void` Not Found
     */
    postQuizzesInstancesIdSubmission: (id: UUID, data: SubmitInstanceRequest, params: RequestParams = {}) =>
      this.http.request<QuizSessionSubmitted, void>({
        path: `/quizzes/instances/${id}/submission`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_quizzes_sessions_results
     *
     * @tags Lifeliqe.Quizzes.Api.QuizSessionEndpoints
     * @name GetQuizzesSessionsResults
     * @summary Get all session results for certain student
     * @request GET:/quizzes/sessions/results
     * @secure
     * @response `200` `(QuizSessionResultSimpleResponse)[]` OK
     * @response `404` `void` Not Found
     */
    getQuizzesSessionsResults: (params: RequestParams = {}) =>
      this.http.request<QuizSessionResultSimpleResponse[], void>({
        path: `/quizzes/sessions/results`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_quizzes
     *
     * @tags Lifeliqe.Quizzes.Api.QuizzesEndpoint
     * @name GetQuizzes
     * @summary Get all quizzes that belong to the current user
     * @request GET:/quizzes
     * @secure
     * @response `200` `(QuizResponse)[]` OK
     * @response `404` `void` Not Found
     */
    getQuizzes: (params: RequestParams = {}) =>
      this.http.request<QuizResponse[], void>({
        path: `/quizzes`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description POST_quizzes
     *
     * @tags Lifeliqe.Quizzes.Api.QuizzesEndpoint
     * @name PostQuizzes
     * @summary Create new quiz
     * @request POST:/quizzes
     * @secure
     * @response `200` `QuizCreatedByUser` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    postQuizzes: (data: CreateQuizRequest, params: RequestParams = {}) =>
      this.http.request<QuizCreatedByUser, ProblemDetails | void>({
        path: `/quizzes`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_quizzes_id
     *
     * @tags Lifeliqe.Quizzes.Api.QuizzesEndpoint
     * @name GetQuizzesId
     * @summary Get single quiz by Id
     * @request GET:/quizzes/{id}
     * @secure
     * @response `200` `QuizResponse` OK
     * @response `404` `void` Not Found
     */
    getQuizzesId: (id: UUID, params: RequestParams = {}) =>
      this.http.request<QuizResponse, void>({
        path: `/quizzes/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description PUT_quizzes_id
     *
     * @tags Lifeliqe.Quizzes.Api.QuizzesEndpoint
     * @name PutQuizzesId
     * @summary Update existing quiz
     * @request PUT:/quizzes/{id}
     * @secure
     * @response `200` `QuizModified` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    putQuizzesId: (id: UUID, data: UpdateQuizRequest, params: RequestParams = {}) =>
      this.http.request<QuizModified, ProblemDetails | void>({
        path: `/quizzes/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description DELETE_quizzes_id
     *
     * @tags Lifeliqe.Quizzes.Api.QuizzesEndpoint
     * @name DeleteQuizzesId
     * @summary Delete quiz by Id
     * @request DELETE:/quizzes/{id}
     * @secure
     * @response `200` `QuizDeleted` OK
     * @response `404` `void` Not Found
     */
    deleteQuizzesId: (id: UUID, params: RequestParams = {}) =>
      this.http.request<QuizDeleted, void>({
        path: `/quizzes/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description PATCH_quizzes_id_questions_order
     *
     * @tags Lifeliqe.Quizzes.Api.QuizzesEndpoint
     * @name PatchQuizzesIdQuestionsOrder
     * @summary Update order of questions in quiz
     * @request PATCH:/quizzes/{id}/questions/order
     * @secure
     * @response `200` `QuizModified` OK
     * @response `404` `void` Not Found
     */
    patchQuizzesIdQuestionsOrder: (id: UUID, data: PatchQuizzesIdQuestionsOrderPayload, params: RequestParams = {}) =>
      this.http.request<QuizModified, void>({
        path: `/quizzes/${id}/questions/order`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description POST_quizzes_quizId_questions
     *
     * @tags Lifeliqe.Quizzes.Api.QuizzesEndpoint
     * @name PostQuizzesQuizIdQuestions
     * @summary Add new question to quiz
     * @request POST:/quizzes/{quizId}/questions
     * @secure
     * @response `200` `QuizQuestionCreated` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    postQuizzesQuizIdQuestions: (quizId: UUID, data: AddQuizQuestionRequest, params: RequestParams = {}) =>
      this.http.request<QuizQuestionCreated, ProblemDetails | void>({
        path: `/quizzes/${quizId}/questions`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description PUT_quizzes_quizId_questions_questionId
     *
     * @tags Lifeliqe.Quizzes.Api.QuizzesEndpoint
     * @name PutQuizzesQuizIdQuestionsQuestionId
     * @summary Update existing question in quiz
     * @request PUT:/quizzes/{quizId}/questions/{questionId}
     * @secure
     * @response `200` `QuizQuestionModified` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    putQuizzesQuizIdQuestionsQuestionId: (
      quizId: UUID,
      questionId: UUID,
      data: UpdateQuizQuestionRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<QuizQuestionModified, ProblemDetails | void>({
        path: `/quizzes/${quizId}/questions/${questionId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description DELETE_quizzes_quizId_questions_questionId
     *
     * @tags Lifeliqe.Quizzes.Api.QuizzesEndpoint
     * @name DeleteQuizzesQuizIdQuestionsQuestionId
     * @summary Delete specific question from quiz
     * @request DELETE:/quizzes/{quizId}/questions/{questionId}
     * @secure
     * @response `200` `QuizQuestionDeleted` OK
     * @response `404` `void` Not Found
     */
    deleteQuizzesQuizIdQuestionsQuestionId: (quizId: UUID, questionId: UUID, params: RequestParams = {}) =>
      this.http.request<QuizQuestionDeleted, void>({
        path: `/quizzes/${quizId}/questions/${questionId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description POST_quizzes_instances
     *
     * @tags Lifeliqe.Quizzes.Api.QuizzesEndpoint
     * @name PostQuizzesInstances
     * @summary Create new instance from quiz
     * @request POST:/quizzes/instances
     * @secure
     * @response `200` `QuizInstanceCreated` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    postQuizzesInstances: (data: CreateQuizInstanceRequest, params: RequestParams = {}) =>
      this.http.request<QuizInstanceCreated, ProblemDetails | void>({
        path: `/quizzes/instances`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Only for debug
     *
     * @tags Lifeliqe.Quizzes.Api.QuizzesEndpoint
     * @name GetQuizzesInstances
     * @summary Get all quiz instances
     * @request GET:/quizzes/instances
     * @secure
     * @response `200` `(QuizInstanceResponse)[]` OK
     * @response `404` `void` Not Found
     */
    getQuizzesInstances: (params: RequestParams = {}) =>
      this.http.request<QuizInstanceResponse[], void>({
        path: `/quizzes/instances`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_quizzes_instances_users_id_assigned
     *
     * @tags Lifeliqe.Quizzes.Api.QuizzesEndpoint
     * @name GetQuizzesInstancesUsersIdAssigned
     * @summary Get all instances assigned to certain student
     * @request GET:/quizzes/instances/users/{id}/assigned
     * @secure
     * @response `200` `(QuizInstanceInfoResponse)[]` OK
     * @response `404` `void` Not Found
     */
    getQuizzesInstancesUsersIdAssigned: (id: UUID, params: RequestParams = {}) =>
      this.http.request<QuizInstanceInfoResponse[], void>({
        path: `/quizzes/instances/users/${id}/assigned`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_quizzes_instances_id
     *
     * @tags Lifeliqe.Quizzes.Api.QuizzesEndpoint
     * @name GetQuizzesInstancesId
     * @summary Get quiz instance by Id
     * @request GET:/quizzes/instances/{id}
     * @secure
     * @response `200` `QuizInstanceResponse` OK
     * @response `404` `void` Not Found
     */
    getQuizzesInstancesId: (id: UUID, params: RequestParams = {}) =>
      this.http.request<QuizInstanceResponse, void>({
        path: `/quizzes/instances/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_quizzes_instances_id_info
     *
     * @tags Lifeliqe.Quizzes.Api.QuizzesEndpoint
     * @name GetQuizzesInstancesIdInfo
     * @summary Get quiz instance info by Id
     * @request GET:/quizzes/instances/{id}/info
     * @secure
     * @response `200` `QuizInstanceInfoResponse` OK
     * @response `404` `void` Not Found
     */
    getQuizzesInstancesIdInfo: (id: UUID, params: RequestParams = {}) =>
      this.http.request<QuizInstanceInfoResponse, void>({
        path: `/quizzes/instances/${id}/info`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description PUT_quizzes_instances_id_assigned_users
     *
     * @tags Lifeliqe.Quizzes.Api.QuizzesEndpoint
     * @name PutQuizzesInstancesIdAssignedUsers
     * @summary Update users assigned to quiz instance
     * @request PUT:/quizzes/instances/{id}/assigned-users
     * @secure
     * @response `200` `QuizInstanceAssignedToStudents` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    putQuizzesInstancesIdAssignedUsers: (
      id: UUID,
      data: AssignUsersToQuizInstanceRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<QuizInstanceAssignedToStudents, ProblemDetails | void>({
        path: `/quizzes/instances/${id}/assigned-users`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description POST_quizzes_instances_direct
     *
     * @tags Lifeliqe.Quizzes.Api.QuizzesEndpoint
     * @name PostQuizzesInstancesDirect
     * @summary Create new instance directly without first directly specifying quiz
     * @request POST:/quizzes/instances/direct
     * @secure
     * @response `200` `QuizInstanceCreated` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    postQuizzesInstancesDirect: (data: CreateQuizInstanceDirectlyRequest, params: RequestParams = {}) =>
      this.http.request<QuizInstanceCreated, ProblemDetails | void>({
        path: `/quizzes/instances/direct`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  search = {
    /**
     * @description GET_search_packages_by_name
     *
     * @tags Lifeliqe.Search.Api.SearchEndpoint
     * @name GetSearchPackagesByName
     * @summary Api for package search by name, search text and localization id are needed. Returns Package Ids and names for the autocomplete.
     * @request GET:/search/packages-by-name
     * @secure
     * @response `200` `PackageSearchResponse` OK
     * @response `404` `void` Not Found
     */
    getSearchPackagesByName: (query: GetSearchPackagesByNameParams, params: RequestParams = {}) =>
      this.http.request<PackageSearchResponse, void>({
        path: `/search/packages-by-name`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_search_packages_by_name_and_description
     *
     * @tags Lifeliqe.Search.Api.SearchEndpoint
     * @name GetSearchPackagesByNameAndDescription
     * @summary Api for package search by name and description, search text and localization id are needed. Returns Package Ids and names for the autocomplete.
     * @request GET:/search/packages-by-name-and-description
     * @secure
     * @response `200` `PackageSearchResponse` OK
     * @response `404` `void` Not Found
     */
    getSearchPackagesByNameAndDescription: (
      query: GetSearchPackagesByNameAndDescriptionParams,
      params: RequestParams = {},
    ) =>
      this.http.request<PackageSearchResponse, void>({
        path: `/search/packages-by-name-and-description`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
 * @description POST_search_packages
 *
 * @tags Lifeliqe.Search.Api.SearchEndpoint
 * @name PostSearchPackages
 * @summary Upsert data to the packags on TypeSense
Expecting file witt List of PackageSearchRecord
 * @request POST:/search/packages
 * @secure
 * @response `200` `(PackageSearchRecord)[]` OK
 * @response `404` `void` Not Found
 */
    postSearchPackages: (data: PostSearchPackagesPayload, params: RequestParams = {}) =>
      this.http.request<PackageSearchRecord[], void>({
        path: `/search/packages`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),
  };
  featureFlags = {
    /**
     * @description GET_feature_flags
     *
     * @tags Lifeliqe.SharedKernel.Api.FeatureFlagsEndpoint
     * @name GetFeatureFlags
     * @summary Get all feature flags
     * @request GET:/feature-flags
     * @secure
     * @response `200` `IResult` OK
     * @response `404` `void` Not Found
     */
    getFeatureFlags: (params: RequestParams = {}) =>
      this.http.request<IResult, void>({
        path: `/feature-flags`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  activeFeatureFlags = {
    /**
     * @description GET_active_feature_flags
     *
     * @tags Lifeliqe.SharedKernel.Api.FeatureFlagsEndpoint
     * @name GetActiveFeatureFlags
     * @summary Get active feature flags
     * @request GET:/active-feature-flags
     * @secure
     * @response `200` `IResult` OK
     * @response `404` `void` Not Found
     */
    getActiveFeatureFlags: (params: RequestParams = {}) =>
      this.http.request<IResult, void>({
        path: `/active-feature-flags`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  inactiveFeatureFlags = {
    /**
     * @description GET_inactive_feature_flags
     *
     * @tags Lifeliqe.SharedKernel.Api.FeatureFlagsEndpoint
     * @name GetInactiveFeatureFlags
     * @summary Get inactive feature flags
     * @request GET:/inactive-feature-flags
     * @secure
     * @response `200` `IResult` OK
     * @response `404` `void` Not Found
     */
    getInactiveFeatureFlags: (params: RequestParams = {}) =>
      this.http.request<IResult, void>({
        path: `/inactive-feature-flags`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  healthz = {
    /**
     * @description GET_healthz
     *
     * @tags Lifeliqe.SharedKernel.Api.MaintenanceEndpoint
     * @name GetHealthz
     * @summary Get app health status
     * @request GET:/healthz
     * @secure
     * @response `200` `IResult` OK
     * @response `404` `void` Not Found
     */
    getHealthz: (params: RequestParams = {}) =>
      this.http.request<IResult, void>({
        path: `/healthz`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  readyz = {
    /**
     * @description GET_readyz
     *
     * @tags Lifeliqe.SharedKernel.Api.MaintenanceEndpoint
     * @name GetReadyz
     * @summary Get app ready status
     * @request GET:/readyz
     * @secure
     * @response `200` `IResult` OK
     * @response `404` `void` Not Found
     */
    getReadyz: (params: RequestParams = {}) =>
      this.http.request<IResult, void>({
        path: `/readyz`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  uploadedFiles = {
    /**
     * @description POST_uploaded_files
     *
     * @tags Lifeliqe.UploadedFiles.Api.UploadedFilesEndpoint
     * @name PostUploadedFiles
     * @summary Upload File on storage
     * @request POST:/uploaded-files
     * @secure
     * @response `200` `UploadedFileUploaded` OK
     * @response `404` `void` Not Found
     */
    postUploadedFiles: (query: PostUploadedFilesParams, data: PostUploadedFilesPayload, params: RequestParams = {}) =>
      this.http.request<UploadedFileUploaded, void>({
        path: `/uploaded-files`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * @description PATCH_uploaded_files_id_name
     *
     * @tags Lifeliqe.UploadedFiles.Api.UploadedFilesEndpoint
     * @name PatchUploadedFilesIdName
     * @summary Modify File Name
     * @request PATCH:/uploaded-files/{id}/name
     * @secure
     * @response `200` `UploadedFileNameModified` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    patchUploadedFilesIdName: (id: UUID, data: ModifyUploadedFileNameRequest, params: RequestParams = {}) =>
      this.http.request<UploadedFileNameModified, ProblemDetails | void>({
        path: `/uploaded-files/${id}/name`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description PATCH_uploaded_files_id_user_folder
     *
     * @tags Lifeliqe.UploadedFiles.Api.UploadedFilesEndpoint
     * @name PatchUploadedFilesIdUserFolder
     * @summary Modify File UserFolder
     * @request PATCH:/uploaded-files/{id}/user-folder
     * @secure
     * @response `200` `UploadedFileUserFolderModified` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    patchUploadedFilesIdUserFolder: (id: UUID, data: ModifyUploadedFileUserFolderRequest, params: RequestParams = {}) =>
      this.http.request<UploadedFileUserFolderModified, ProblemDetails | void>({
        path: `/uploaded-files/${id}/user-folder`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description DELETE_uploaded_files_id
     *
     * @tags Lifeliqe.UploadedFiles.Api.UploadedFilesEndpoint
     * @name DeleteUploadedFilesId
     * @summary Delete specific File
     * @request DELETE:/uploaded-files/{id}
     * @secure
     * @response `200` `UploadedFileDeleted` OK
     * @response `404` `void` Not Found
     */
    deleteUploadedFilesId: (id: UUID, params: RequestParams = {}) =>
      this.http.request<UploadedFileDeleted, void>({
        path: `/uploaded-files/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_uploaded_files_id
     *
     * @tags Lifeliqe.UploadedFiles.Api.UploadedFilesEndpoint
     * @name GetUploadedFilesId
     * @summary Get url for specific File
     * @request GET:/uploaded-files/{id}
     * @secure
     * @response `200` `string` OK
     */
    getUploadedFilesId: (id: UUID, params: RequestParams = {}) =>
      this.http.request<string, any>({
        path: `/uploaded-files/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description GET_uploaded_files_id_info
     *
     * @tags Lifeliqe.UploadedFiles.Api.UploadedFilesEndpoint
     * @name GetUploadedFilesIdInfo
     * @summary Get info for specific File
     * @request GET:/uploaded-files/{id}/info
     * @secure
     * @response `200` `UploadedFile` OK
     * @response `404` `void` Not Found
     */
    getUploadedFilesIdInfo: (id: UUID, params: RequestParams = {}) =>
      this.http.request<UploadedFile, void>({
        path: `/uploaded-files/${id}/info`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  groups = {
    /**
     * @description GET_groups_id
     *
     * @tags Lifeliqe.Users.Api.GroupsEndpoint
     * @name GetGroupsId
     * @summary Get a group from DB by its ID
     * @request GET:/groups/{id}
     * @secure
     * @response `200` `Group` OK
     * @response `404` `void` Not Found
     */
    getGroupsId: (id: UUID, params: RequestParams = {}) =>
      this.http.request<Group, void>({
        path: `/groups/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description DELETE_groups_id
     *
     * @tags Lifeliqe.Users.Api.GroupsEndpoint
     * @name DeleteGroupsId
     * @summary Delete a group defined by its ID
     * @request DELETE:/groups/{id}
     * @secure
     * @response `200` `GroupDeleted` OK
     * @response `404` `void` Not Found
     */
    deleteGroupsId: (id: UUID, params: RequestParams = {}) =>
      this.http.request<GroupDeleted, void>({
        path: `/groups/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description PUT_groups_id
     *
     * @tags Lifeliqe.Users.Api.GroupsEndpoint
     * @name PutGroupsId
     * @summary Modify group (its name and description)
     * @request PUT:/groups/{id}
     * @secure
     * @response `200` `GroupModified` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    putGroupsId: (id: UUID, data: ModifyGroupRequest, params: RequestParams = {}) =>
      this.http.request<GroupModified, ProblemDetails | void>({
        path: `/groups/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_groups
     *
     * @tags Lifeliqe.Users.Api.GroupsEndpoint
     * @name GetGroups
     * @summary Get all groups for a specified organization (from token)
     * @request GET:/groups
     * @secure
     * @response `200` `(Group)[]` OK
     * @response `404` `void` Not Found
     */
    getGroups: (params: RequestParams = {}) =>
      this.http.request<Group[], void>({
        path: `/groups`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description POST_groups
     *
     * @tags Lifeliqe.Users.Api.GroupsEndpoint
     * @name PostGroups
     * @summary Create a new group
     * @request POST:/groups
     * @secure
     * @response `200` `GroupCreated` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    postGroups: (data: CreateGroupRequest, params: RequestParams = {}) =>
      this.http.request<GroupCreated, ProblemDetails | void>({
        path: `/groups`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_groups_id_subgroups
     *
     * @tags Lifeliqe.Users.Api.GroupsEndpoint
     * @name GetGroupsIdSubgroups
     * @summary Get all groups with specified parentGroupId (all subgroups for a specified group)
     * @request GET:/groups/{id}/subgroups
     * @secure
     * @response `200` `(Group)[]` OK
     * @response `404` `void` Not Found
     */
    getGroupsIdSubgroups: (id: UUID, params: RequestParams = {}) =>
      this.http.request<Group[], void>({
        path: `/groups/${id}/subgroups`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description PUT_groups_id_users
     *
     * @tags Lifeliqe.Users.Api.GroupsEndpoint
     * @name PutGroupsIdUsers
     * @summary Add multiple users to a group
     * @request PUT:/groups/{id}/users
     * @secure
     * @response `200` `NewUsersAddedToGroup` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    putGroupsIdUsers: (id: UUID, data: AddUsersToGroupRequest, params: RequestParams = {}) =>
      this.http.request<NewUsersAddedToGroup, ProblemDetails | void>({
        path: `/groups/${id}/users`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description DELETE_groups_id_users
     *
     * @tags Lifeliqe.Users.Api.GroupsEndpoint
     * @name DeleteGroupsIdUsers
     * @summary Remove multiple users from group defined by its ID
     * @request DELETE:/groups/{id}/users
     * @secure
     * @response `200` `UsersRemovedFromGroup` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    deleteGroupsIdUsers: (id: UUID, data: RemoveUsersFromGroupRequest, params: RequestParams = {}) =>
      this.http.request<UsersRemovedFromGroup, ProblemDetails | void>({
        path: `/groups/${id}/users`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_groups_id_users_export_file
     *
     * @tags Lifeliqe.Users.Api.GroupsEndpoint
     * @name GetGroupsIdUsersExportFile
     * @summary Export a group file (.csv list of members IDs in a group)
     * @request GET:/groups/{id}/users-export-file
     * @secure
     * @response `204` `void` No Content
     */
    getGroupsIdUsersExportFile: (id: UUID, params: RequestParams = {}) =>
      this.http.request<void, any>({
        path: `/groups/${id}/users-export-file`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description PUT_groups_id_users_file
     *
     * @tags Lifeliqe.Users.Api.GroupsEndpoint
     * @name PutGroupsIdUsersFile
     * @summary Import users to a group from a .csv file created by "GET /groups/{id}/users-export-file" endpoint
     * @request PUT:/groups/{id}/users-file
     * @secure
     * @response `200` `NewUsersImportedToGroup` OK
     * @response `404` `void` Not Found
     */
    putGroupsIdUsersFile: (id: UUID, data: PutGroupsIdUsersFilePayload, params: RequestParams = {}) =>
      this.http.request<NewUsersImportedToGroup, void>({
        path: `/groups/${id}/users-file`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),
  };
  visibleGroups = {
    /**
     * @description GET_visible_groups
     *
     * @tags Lifeliqe.Users.Api.GroupsEndpoint
     * @name GetVisibleGroups
     * @summary Get all visible groups (created by admin) from a specified organization (from token)
     * @request GET:/visible-groups
     * @secure
     * @response `200` `(Group)[]` OK
     * @response `404` `void` Not Found
     */
    getVisibleGroups: (params: RequestParams = {}) =>
      this.http.request<Group[], void>({
        path: `/visible-groups`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  registeredOrganizations = {
    /**
     * @description GET_registered_organizations_id
     *
     * @tags Lifeliqe.Users.Api.RegisteredOrganizationsEndpoint
     * @name GetRegisteredOrganizationsId
     * @summary Get registered organization by id
     * @request GET:/registered-organizations/{id}
     * @secure
     * @response `200` `RegisteredOrganization` OK
     * @response `404` `void` Not Found
     */
    getRegisteredOrganizationsId: (id: UUID, params: RequestParams = {}) =>
      this.http.request<RegisteredOrganization, void>({
        path: `/registered-organizations/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description DELETE_registered_organizations_id
     *
     * @tags Lifeliqe.Users.Api.RegisteredOrganizationsEndpoint
     * @name DeleteRegisteredOrganizationsId
     * @summary Deactivate organization
     * @request DELETE:/registered-organizations/{id}
     * @secure
     * @response `200` `RegisteredOrganizationDeactivated` OK
     * @response `404` `void` Not Found
     */
    deleteRegisteredOrganizationsId: (id: UUID, params: RequestParams = {}) =>
      this.http.request<RegisteredOrganizationDeactivated, void>({
        path: `/registered-organizations/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_registered_organizations
     *
     * @tags Lifeliqe.Users.Api.RegisteredOrganizationsEndpoint
     * @name GetRegisteredOrganizations
     * @summary Get all existing registered organizations
     * @request GET:/registered-organizations
     * @secure
     * @response `200` `(RegisteredOrganization)[]` OK
     * @response `404` `void` Not Found
     */
    getRegisteredOrganizations: (params: RequestParams = {}) =>
      this.http.request<RegisteredOrganization[], void>({
        path: `/registered-organizations`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint doesn't require authenticated user
     *
     * @tags Lifeliqe.Users.Api.RegisteredOrganizationsEndpoint
     * @name PostRegisteredOrganizations
     * @summary Register a new organization with its admin - online version
     * @request POST:/registered-organizations
     * @secure
     * @response `200` `RegisteredOrganizationCreated` OK
     * @response `400` `ProblemDetails` Bad Request
     * @response `404` `void` Not Found
     */
    postRegisteredOrganizations: (data: CreateRegisteredOrganizationOnlineRequest, params: RequestParams = {}) =>
      this.http.request<RegisteredOrganizationCreated, ProblemDetails | void>({
        path: `/registered-organizations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description GET_registered_organizations_deactivated
     *
     * @tags Lifeliqe.Users.Api.RegisteredOrganizationsEndpoint
     * @name GetRegisteredOrganizationsDeactivated
     * @summary Get all deactivated registered organizations
     * @request GET:/registered-organizations/deactivated
     * @secure
     * @response `200` `(RegisteredOrganization)[]` OK
     * @response `404` `void` Not Found
     */
    getRegisteredOrganizationsDeactivated: (params: RequestParams = {}) =>
      this.http.request<RegisteredOrganization[], void>({
        path: `/registered-organizations/deactivated`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  students = {
    /**
     * @description GET_students
     *
     * @tags Lifeliqe.Users.Api.UsersEndpoint
     * @name GetStudents
     * @summary Get all students in organization
     * @request GET:/students
     * @secure
     * @response `200` `(User)[]` OK
     * @response `404` `void` Not Found
     */
    getStudents: (params: RequestParams = {}) =>
      this.http.request<User[], void>({
        path: `/students`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  user = {
    /**
     * @description GET_user_info
     *
     * @tags Lifeliqe.Users.Api.UsersEndpoint
     * @name GetUserInfo
     * @summary Get user info about currently logged-in user
     * @request GET:/user/info
     * @secure
     * @response `200` `UserInfo` OK
     * @response `404` `void` Not Found
     */
    getUserInfo: (params: RequestParams = {}) =>
      this.http.request<UserInfo, void>({
        path: `/user/info`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
}


export const apiClient = new HttpClient<string>({
  securityWorker: (accessToken) =>
    accessToken ? { headers: { Authorization: `Bearer ${accessToken}` } } : {},
  baseApiParams: { secure: true }
});

export const api = new Api<string>(apiClient);

