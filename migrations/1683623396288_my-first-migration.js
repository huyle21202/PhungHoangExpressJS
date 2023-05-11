/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.createTable('users', {
        id: 'id',
        name: {type: 'varchar(100)', notNull: true},
        phone: {type: 'varchar(50)', notNull: true},
        password: {type: 'varchar(100)', notNull: true},
        token: {type: 'varchar(500)', notNull: true, default: ''},
        status: {type: 'smallint', notNull: true, default: 1}
    })

    pgm.createTable('groups', {
        id: 'id',
        name: {type: 'varchar(100)', notNull: true},
        status: {type: 'smallint', notNull: true, default: 1}
    })

    pgm.createTable('brands', {
        id: 'id',
        name: {type: 'varchar(100)', notNull: true},
        status: {type: 'smallint', notNull: true, default: 1}
    })

    pgm.createTable('products', {
        id: 'id',
        code: {type: 'varchar(100)', notNull: true, unique: true},
        name: {type: 'varchar(500)', notNull: true},
        otherName: {type: 'varchar(500)', allowNull: true, default: ''},
        image: {type: 'varchar(500)', allowNull: true, default:''},
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
        price: {type: 'numeric(18,2)', notNull: true},
        quantity: {type: 'integer', notNull: true, default: 0},
        status: {type: 'smallint', notNull: true, default: 1}
    })
}

exports.down = pgm => {};
