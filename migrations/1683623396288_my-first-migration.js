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

    pgm.createTable('bills', {
        id: {type: 'uuid', notNull: true, key: true},
        description: {type: 'varchar(200)', notNull: true},
        createdAt: {type: 'integer', notNull: true, default: 0},
        updatedAt: {type: 'integer', notNull: true, default: 0},
        total:{type: 'numeric(18,2)', notNull: true},
        estimation: {type: 'integer', notNull: true, default: 0}
    })

    pgm.createTable('bill_assigners', {
        id: {type: 'uuid', notNull: true, key: true},
        userId: {
            type: 'integer',
            notNull: true,
            references: '"users"',
            onDelete: 'cascade',
        },
        note: {type: 'varchar(200)', notNull: true},
        quantity: {type: 'integer', notNull: true, default: 0},
        createdAt: {type: 'integer', notNull: true, default: 0},
        updatedAt: {type: 'integer', notNull: true, default: 0},
        active: {type: 'boolean', default: false}
    })
    
    pgm.createTable('bill_products', {
        id: {type: 'uuid', notNull: true, key: true},
        billId: {
            type: 'uuid',
            notNull: true,
            references: '"bills"',
            onDelete: 'cascade',
        },
        note: {type: 'varchar(200)', notNull: true},
        productId: {
            type: 'integer',
            notNull: true,
            references: '"products"',
            onDelete: 'cascade',
        },
        price: {type: 'numeric(18,2)', notNull: true},
        quantity: {type: 'integer', notNull: true, default: 0},
        createdAt: {type: 'integer', notNull: true, default: 0},
        updatedAt: {type: 'integer', notNull: true, default: 0},
    })



    pgm.createTable('bill_services', {
        id: {type: 'uuid', notNull: true, key: true},
        billId: {
            type: 'uuid',
            notNull: true,
            references: '"bills"',
            onDelete: 'cascade',
        },
        note: {type: 'varchar(200)', notNull: true},
        price: {type: 'numeric(18,2)', notNull: true},
        createdAt: {type: 'integer', notNull: true, default: 0},
        updatedAt: {type: 'integer', notNull: true, default: 0},
    })
}

exports.down = pgm => {};
