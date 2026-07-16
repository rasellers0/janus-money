
create table budgets (

    budget_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id BIGINT NOT NULL,
    category_id BIGINT NOT NULL,
    budget_name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    budget_amount NUMERIC(12,2) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_user
        FOREIGN KEY (user_id)
        REFERENCES users(user_id),

    CONSTRAINT fk_category
        FOREIGN KEY (category_id)
        REFERENCES categories(category_id)