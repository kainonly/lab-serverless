import { EntityManager } from 'typeorm';
import { Resource } from '@entity/framework/resource';

export async function resource(entityManager: EntityManager, vars: any) {
  await entityManager.getRepository(Resource).insert([
    {
      key: 'system',
      parent: 'origin',
      name: { zh_cn: '系统设置', en_us: 'System' },
      nav: 1,
      router: 0,
      policy: 0,
      icon: 'setting',
      create_time: vars.time,
      update_time: vars.time,
    },
    {
      key: 'control',
      parent: 'system',
      name: { zh_cn: '控制授权', en_us: 'Control' },
      nav: 1,
      router: 0,
      policy: 0,
      icon: null,
      create_time: vars.time,
      update_time: vars.time,
    },
    {
      key: 'acl-index',
      parent: 'control',
      name: { zh_cn: '访问项', en_us: 'Acl' },
      nav: 1,
      router: 1,
      policy: 1,
      icon: null,
      create_time: vars.time,
      update_time: vars.time,
    },
    {
      key: 'acl-add',
      parent: 'acl-index',
      name: { zh_cn: '访问项新增', en_us: 'Acl Add' },
      nav: 0,
      router: 1,
      policy: 0,
      icon: null,
      create_time: vars.time,
      update_time: vars.time,
    },
    {
      key: 'acl-edit',
      parent: 'acl-index',
      name: { zh_cn: '访问项修改', en_us: 'Acl Edit' },
      nav: 0,
      router: 1,
      policy: 0,
      icon: null,
      create_time: vars.time,
      update_time: vars.time,
    },
    {
      key: 'resource-index',
      parent: 'control',
      name: { zh_cn: '资源项', en_us: 'Resource' },
      nav: 1,
      router: 1,
      policy: 1,
      icon: null,
      create_time: vars.time,
      update_time: vars.time,
    },
    {
      key: 'resource-add',
      parent: 'resource-index',
      name: { zh_cn: '资源项新增', en_us: 'Resource Add' },
      nav: 0,
      router: 1,
      policy: 0,
      icon: null,
      create_time: vars.time,
      update_time: vars.time,
    },
    {
      key: 'resource-edit',
      parent: 'resource-index',
      name: { zh_cn: '资源项修改', en_us: 'Resource Edit' },
      nav: 0,
      router: 1,
      policy: 0,
      icon: null,
      create_time: vars.time,
      update_time: vars.time,
    },
    {
      key: 'permission-index',
      parent: 'system',
      name: { zh_cn: '特殊授权', en_us: 'Permission' },
      nav: 1,
      router: 1,
      policy: 1,
      icon: null,
      create_time: vars.time,
      update_time: vars.time,
    },
    {
      key: 'permission-add',
      parent: 'permission-index',
      name: { zh_cn: '特殊授权新增', en_us: 'Permission Add' },
      nav: 0,
      router: 1,
      policy: 0,
      icon: null,
      create_time: vars.time,
      update_time: vars.time,
    },
    {
      key: 'permission-edit',
      parent: 'permission-index',
      name: { zh_cn: '特殊授权修改', en_us: 'Permission Edit' },
      nav: 0,
      router: 1,
      policy: 0,
      icon: null,
      create_time: vars.time,
      update_time: vars.time,
    },
    {
      key: 'role-index',
      parent: 'system',
      name: { zh_cn: '权限组', en_us: 'Role' },
      nav: 1,
      router: 1,
      policy: 1,
      icon: null,
      create_time: vars.time,
      update_time: vars.time,
    },
    {
      key: 'role-add',
      parent: 'role-index',
      name: { zh_cn: '权限组新增', en_us: 'Role Add' },
      nav: 0,
      router: 1,
      policy: 0,
      icon: null,
      create_time: vars.time,
      update_time: vars.time,
    },
    {
      key: 'role-edit',
      parent: 'role-index',
      name: { zh_cn: '权限组修改', en_us: 'Role Edit' },
      nav: 0,
      router: 1,
      policy: 0,
      icon: null,
      create_time: vars.time,
      update_time: vars.time,
    },
    {
      key: 'admin-index',
      parent: 'system',
      name: { zh_cn: '管理员', en_us: 'Admin' },
      nav: 1,
      router: 1,
      policy: 1,
      icon: null,
      create_time: vars.time,
      update_time: vars.time,
    },
    {
      key: 'admin-add',
      parent: 'admin-index',
      name: { zh_cn: '管理员新增', en_us: 'Admin Add' },
      nav: 0,
      router: 1,
      policy: 0,
      icon: null,
      create_time: vars.time,
      update_time: vars.time,
    },
    {
      key: 'admin-edit',
      parent: 'admin-index',
      name: { zh_cn: '管理员修改', en_us: 'Admin Edit' },
      nav: 0,
      router: 1,
      policy: 0,
      icon: null,
      create_time: vars.time,
      update_time: vars.time,
    },
    {
      key: 'center',
      parent: 'origin',
      name: { zh_cn: '个人中心', en_us: 'Center' },
      nav: 0,
      router: 0,
      policy: 0,
      icon: null,
      create_time: vars.time,
      update_time: vars.time,
    },
    {
      key: 'profile',
      parent: 'center',
      name: { zh_cn: '信息修改', en_us: 'Profile' },
      nav: 0,
      router: 1,
      policy: 0,
      icon: null,
      create_time: vars.time,
      update_time: vars.time,
    },
  ]);
}
