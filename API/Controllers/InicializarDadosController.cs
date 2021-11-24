using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/inicializar")]
    public class InicializarDadosController : ControllerBase
    {
        private readonly DataContext _context;
        public InicializarDadosController(DataContext context)
        {
            _context = context;
        }

        //POST: api/inicializar/create
        [HttpPost]
        [Route("create")]
        public IActionResult Create()
        {
            _context.Categorias.AddRange(new Categoria[]
                {
                    new Categoria { Id = 1, Nome = "Categoria 1" },
                }
            );
            _context.Produtos.AddRange(new Produto[]
                {
                    new Produto { Id = 1, Nome = "Arroz", Preco = 4, Quantidade = 2, CategoriaId = 1 },
                    new Produto { Id = 2, Nome = "Feijão", Preco = 1, Quantidade = 1, CategoriaId = 1 },
                    new Produto { Id = 3, Nome = "Pão", Preco = 8, Quantidade = 4, CategoriaId = 1 },
                }
            );
            _context.SaveChanges();
            return Ok(new { message = "Dados inicializados com sucesso!" });
        }
    }
}