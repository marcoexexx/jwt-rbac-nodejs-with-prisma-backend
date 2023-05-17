type RoleEnum = 
  | "admin"
  | "guest"
  | "manager"
  | "employee"



type PermissionAction = 
  | "!"
  | "*"
  | "read"
  | "create"
  | "update"
  | "delete"


class Permission {
  readonly resource: string;
  readonly action: PermissionAction;

  constructor(resource: string, action: PermissionAction) {
    this.resource = resource;
    this.action = action;
  }

  get name(): string {
    return `${this.resource}:${this.action}`
  }
}


class Role {
  readonly name: RoleEnum;
  readonly permissions: Permission[];

  constructor(name: RoleEnum, permissions: Permission[]) {
    this.name = name;
    this.permissions = permissions;
  }
}


class AccessRule {
  rules: Role[] = [
    new Role("admin", [new Permission("*", "*")]),

    new Role("guest", []),

    new Role("manager", []),

    new Role("employee", [])
  ];


  isAuthorize(user: any, permission: string) {
    let access = false;
    const [resource, action] = permission.split(":");

  }
}
