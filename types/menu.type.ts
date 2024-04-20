import type { MenuLevelEnum, RoleEnum } from '~/utils/enums';

export type Menu = {
	readonly parentId?: string;
	readonly title: string;
	readonly prefix: string;
	readonly icon?: string;
	readonly level: MenuLevelEnum;
	readonly url: string;
	readonly isHorizontal: boolean;
	readonly isShow: boolean;
	readonly roles: RoleEnum[];
	readonly subMenus: Menu[];
};
