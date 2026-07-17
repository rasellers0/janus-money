
create table recurring_transactions (
    recurring_trans_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id TEXT NOT NULL,
    account_id BIGINT NOT NULL,
    category_id BIGINT,
    merchant VARCHAR(255),
    description VARCHAR(255),
    amount NUMERIC(12,2),
    cron_schedule VARCHAR(255),
    next_run TIMESTAMPTZ,
    last_run TIMESTAMPTZ,
    enabled BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_user
        FOREIGN KEY (user_id)
        REFERENCES auth_db.user(id),

    CONSTRAINT fk_account
        FOREIGN KEY (account_id)
        REFERENCES financial_accounts(account_id),

    CONSTRAINT fk_category
        FOREIGN KEY (category_id)
        REFERENCES categories(category_id)
)
