export enum ExceptionEnum {
	PageNotAccess = 403,
	PageNotFound = 404,
	ServerError = 500,
}

export enum ErrorTypeEnum {
	ValidationExceptions = 'ValidationExceptions',
	ValidationError = 'ValidationError',
	CastError = 'CastError',
	InternalServerError = 'InternalServerError',
}

export enum AccountTypeEnum {
	Local = 'LOCAL',
	Google = 'GOOGLE',
	Facebook = 'FACEBOOK',
	Apple = 'APPLE',
}

export enum RoleEnum {
	User = 'USER',
	Manager = 'MANAGER',
	Admin = 'ADMIN',
	SupperAdmin = 'SUPER_ADMIN',
}

export enum MenuLevelEnum {
	One = 1,
	Two = 2,
	Three = 3,
}

export enum GenderEnum {
	Male = 'MALE',
	Female = 'FEMALE',
	Other = 'OTHER',
}
