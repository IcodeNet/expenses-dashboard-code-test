import React, { useEffect, useState } from 'react'

export const Dashboard = () => {
  const [providerData, setProviderData] = useState(null);
  const [error, setError] = useState("");

  const fetchTransactions = async () => {
    try {
      const data = await fetch("https://www.mocky.io/v2/5c62e7c33000004a00019b05");

      if (data.ok) {
        const parsed = await data.json();

        setProviderData(parsed);
      } else {
        setError("You're transactions are unavailable right now. Please try again later.");    
      }
    } catch (e) {
      setError("We were unable to fetch your transactions. Please try again later.");
    }
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <>
      <h2>Dashboard list goes here</h2>

      {
        providerData ? <ul>
          {/* @ts-ignore */}
          {providerData?.transactions.map(({id, amount, date, description}) => {
            const {value, currency_iso} = amount;

            return (
              <li key={id}>
                <div>Transaction date is {date}</div>
                <div>Description is {description}</div>
                <div>Amount is {value.toString()} {currency_iso}</div>
              </li>
            )
          })}
        </ul> : null
      }
  </>
  )
}