using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using shopProject.Models;
using shopProject.Repositories;

namespace shopProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClothingItemController : ControllerBase
    {
        private readonly IClothingItemRepository _clothingItemRepository;
        public ClothingItemController(IClothingItemRepository clothingItemRepository) => _clothingItemRepository = clothingItemRepository;

        [HttpGet]
        public async Task<IEnumerable<ClothingItem>> Get()
        {
            return await _clothingItemRepository.Get();
        }
        [HttpGet("{id}")]
        [ProducesResponseType(typeof(ClothingItem), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetById(int id)
        {
            var clothingItem = await _clothingItemRepository.GetById(id);
            return clothingItem == null ? NotFound() : Ok(clothingItem);
        }
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public async Task<IActionResult> Create(ClothingItem clothingItem)
        {
            
            await _clothingItemRepository.Create(clothingItem);
           
            return CreatedAtAction(nameof(GetById), new { id = clothingItem.Id }, clothingItem);
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> Delete(int id)
        {
            var clothingItem = await GetById(id);
            if (clothingItem == null) return NotFound();
            await _clothingItemRepository.Delete(id);
            return NoContent();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, ClothingItem clothingItem)
        {
            if (id != clothingItem.Id) return BadRequest();
            await _clothingItemRepository.Update(id, clothingItem);
            return NoContent();
        }
    }
}
