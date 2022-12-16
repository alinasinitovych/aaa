using Microsoft.AspNetCore.Mvc;
using shopProject.Models;

namespace shopProject.Repositories
{
    public interface IClothingItemRepository
    {
        Task<IEnumerable<ClothingItem>> Get();
        Task<ClothingItem> GetById(int id);
        Task<ClothingItem> Create(ClothingItem clothingItem);
        Task Delete(int id);
        Task Update(int id, ClothingItem clothingItem);
    }
}
