export const userAccountsById = 
    `
        select * from public.financial_accounts fa
        inner join auth_db.user u on u.id = fa.user_id
        where u.id = $1
    `;

export const addAccount =
    `
        insert into public.financial_accounts(user_id, account_name, account_type, institution, created_at, updated_at)
        values($1, $2, $3, $4, 'active', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
    `;