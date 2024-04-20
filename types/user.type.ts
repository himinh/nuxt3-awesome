import type { AccountTypeEnum, GenderEnum, RoleEnum } from '~/utils/enums';

export type User = {
	email: string | null;
	phone: string;
	username: string;
	accountType: AccountTypeEnum;

	_id: string;
	fullName: string | null;
	gender: GenderEnum | '';
	dateOfBirth: number | null;
	avatar: string | null;

	deviceID: string;
	fcmTokens: string[];
	enableFcm: boolean;
	role: RoleEnum;
	deleted: boolean;
};
