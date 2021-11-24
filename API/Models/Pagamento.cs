using System;

namespace API.Models
{
    public class Pagamento
    {
        public Pagamento() => CriadoEm = DateTime.Now;
        public int Id { get; set; }
        public Produto Produto { get; set; }
        public string FormaPagamento { get; set; }
         public DateTime CriadoEm { get; set; }

        internal static Pagamento add(Pagamento pagamento)
        {
            throw new NotImplementedException();
        }
    }
}