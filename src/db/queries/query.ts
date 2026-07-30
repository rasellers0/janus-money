
export const userTransactionsById = 
    `
        select * from public.transactions t
        left join public.financial_accounts fa on t.account_id = fa.account_id
        inner join auth_db.user u on u.id = fa.user_id
        where u.id = $1
    `;
