create table categories (
    category_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id BIGINT NOT NULL,
    category_name VARCHAR(255) NOT NULL,
    category_type VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    CONSTRAINT fk_user
        FOREIGN KEY (user_id)
        REFERENCES users(user_id)
)