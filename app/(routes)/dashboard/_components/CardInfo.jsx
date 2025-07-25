import formatNumber from "@/utils"; 
import {
  PiggyBank,
  ReceiptText,
  Wallet,
  CircleDollarSign,
} from "lucide-react";
import React, { useEffect, useState } from "react";

function CardInfo({ budgetList, incomeList }) {
  const [totalBudget, setTotalBudget] = useState(0);
  const [totalSpend, setTotalSpend] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    if (budgetList.length > 0 || incomeList.length > 0) {
      CalculateCardInfo();
    }
  }, [budgetList, incomeList]);

  const CalculateCardInfo = () => {
    let totalBudget_ = 0;
    let totalSpend_ = 0;
    let totalIncome_ = 0;

    budgetList.forEach((element) => {
      totalBudget_ += Number(element.amount);
      totalSpend_ += element.totalSpend;
    });

    incomeList.forEach((element) => {
      totalIncome_ += element.totalAmount;
    });

    setTotalIncome(totalIncome_);
    setTotalBudget(totalBudget_);
    setTotalSpend(totalSpend_);
  };

  return (
    <div>
      {budgetList?.length > 0 ? (
        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="p-7 border rounded-2xl flex items-center justify-between shadow-2xl shadow-blue-500/20 bg-white dark:bg-gray-800 hover:scale-[1.02] transition-transform">
            <div>
              <h2 className="text-sm text-gray-600 dark:text-gray-300">Total Budget</h2>
              <h2 className="font-bold text-2xl text-gray-900 dark:text-white">
                ${formatNumber(totalBudget)}
              </h2>
            </div>
            <PiggyBank className="bg-blue-800 p-3 h-12 w-12 rounded-full text-white shadow-lg" />
          </div>

          <div className="p-7 border rounded-2xl flex items-center justify-between shadow-2xl shadow-blue-500/20 bg-white dark:bg-gray-800 hover:scale-[1.02] transition-transform">
            <div>
              <h2 className="text-sm text-gray-600 dark:text-gray-300">Total Spend</h2>
              <h2 className="font-bold text-2xl text-gray-900 dark:text-white">
                ${formatNumber(totalSpend)}
              </h2>
            </div>
            <ReceiptText className="bg-blue-800 p-3 h-12 w-12 rounded-full text-white shadow-lg" />
          </div>

          <div className="p-7 border rounded-2xl flex items-center justify-between shadow-2xl shadow-blue-500/20 bg-white dark:bg-gray-800 hover:scale-[1.02] transition-transform">
            <div>
              <h2 className="text-sm text-gray-600 dark:text-gray-300">No. Of Budget</h2>
              <h2 className="font-bold text-2xl text-gray-900 dark:text-white">
                {budgetList?.length}
              </h2>
            </div>
            <Wallet className="bg-blue-800 p-3 h-12 w-12 rounded-full text-white shadow-lg" />
          </div>

          <div className="p-7 border rounded-2xl flex items-center justify-between shadow-2xl shadow-blue-500/20 bg-white dark:bg-gray-800 hover:scale-[1.02] transition-transform">
            <div>
              <h2 className="text-sm text-gray-600 dark:text-gray-300">Sum of Income Streams</h2>
              <h2 className="font-bold text-2xl text-gray-900 dark:text-white">
                ${formatNumber(totalIncome)}
              </h2>
            </div>
            <CircleDollarSign className="bg-blue-800 p-3 h-12 w-12 rounded-full text-white shadow-lg" />
          </div>
        </div>
      ) : (
        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[1, 2, 3].map((item, index) => (
            <div
              className="h-[110px] w-full bg-slate-200 dark:bg-gray-700 animate-pulse rounded-lg shadow"
              key={index}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CardInfo;
