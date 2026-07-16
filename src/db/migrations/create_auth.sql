create table auth (
    user BIGINT NOT NULL,
    session VARCHAR(255) NOT NULL,
    account BIGINT,
    verification VARCHAR(255),

    CONSTRAINT fk_account
        FOREIGN KEY (account)
        REFERENCES financial_accounts(account_id), 

    CONSTRAINT fk_user
        FOREIGN KEY (user)
        REFERENCES app_users(user_id)
)