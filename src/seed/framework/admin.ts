import { EntityManager } from 'typeorm';
import { argon2id } from 'hash-wasm';
import { randomBytes } from 'crypto';
import { Admin } from '@entity/framework/admin';
import { AdminRoleRel } from '@entity/framework/admin-role-rel';

export async function admin(entityManager: EntityManager, vars: any) {
  const result = await entityManager.getRepository(Admin).insert(
    {
      username: 'super',
      password: await argon2id({
        password: 'pass@VAN1234',
        salt: randomBytes(16),
        parallelism: 1,
        iterations: 4,
        memorySize: 65536,
        hashLength: 32,
        outputType: 'encoded',
      }),
      call: 'kain',
      create_time: vars.time,
      update_time: vars.time,
    },
  );
  await entityManager.getRepository(AdminRoleRel).insert({
    admin_id: result.identifiers[0].id,
    role_key: '*',
  });
}
