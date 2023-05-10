/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.createTable('users', {
        id: 'id',
        name: {type: 'varchar(100)', notNull: true},
        phone: {type: 'varchar(20)', notNull: true},
        password: {type: 'varchar(20)', notNull: true},
        token: {type: 'varchar(100)', notNull: true},
        status: {type: 'smallint'}
    })

    pgm.createTable('groups', {
        id: 'id',
        name: {type: 'varchar(100)', notNull: true},
        status: {type: 'smallint'}
    })

    pgm.createTable('brands', {
        id: 'id',
        name: {type: 'varchar(100)', notNull: true},
        status: {type: 'smallint'}
    })

    pgm.createTable('products', {
        id: 'id',
        code: {type: 'varchar(20)', notNull: true, unique: true},
        name: {type: 'varchar(100)', notNull: true},
        otherName: {type: 'varchar(100)', notNull: true},
        groupId: {
            type: 'integer',
            notNull: true,
            references: '"groups"',
            onDelete: 'cascade',
        },
        brandId: {
            type: 'integer',
            notNull: true,
            references: '"brands"',
            onDelete: 'cascade',
        },
        price: {type: 'numeric(18,2)'},
        quantity: {type: 'integer', notNull: true, default: 0},
        updatedAt: {
            type: 'timestamp',
            notNull: true,
            default: pgm.func('current_timestamp')
        },
        status: {type: 'smallint'}
    })
}

exports.down = pgm => {};
