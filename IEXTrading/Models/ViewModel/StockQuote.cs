using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace IEXTrading.Models.ViewModel
{
    public class StockQuote
    {
        public Dictionary<string, Dictionary<string, Quote>> stockQuoteTable { get; set; }
        public List<Company> Companies { get; set; }

        public StockQuote(List<Company> companies, Dictionary<string, Dictionary<string, Quote>> quoteTable)
        {
            Companies = companies;
            stockQuoteTable = quoteTable;
        }
    }

}
