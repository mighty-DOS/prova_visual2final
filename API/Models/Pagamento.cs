using System;

namespace API.Models
{
    public class Pagamento
    {
        public Pagamento() => CriadoEm = DateTime.Now;
        public int Id { get; set; }
        public string BandeiraCartao { get; set; }
        public string FormaPagamento { get; set; }
         public DateTime CriadoEm { get; set; }

    }
}