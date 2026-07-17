create table transactions (
    trans_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    account_id BIGINT NOT NULL,
    category_id BIGINT,
    recurring_transaction_id BIGINT,
    merchant VARCHAR(255),
    description VARCHAR(255),
    transaction_date DATE,
    amount NUMERIC(12,2),
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_account
        FOREIGN KEY (account_id)
        REFERENCES accounts(account_id),

    CONSTRAINT fk_category
        FOREIGN KEY (category_id)
        REFERENCES categories(category_id),

    CONSTRAINT fk_recurring_transaction
        FOREIGN KEY (recurring_transaction_id)
        REFERENCES transactions(trans_id)
)
