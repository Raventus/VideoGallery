using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VideoGallery.PlatformModel.Abstract;

namespace VideoGallery.PlatformModel.PlatformConcrete
{
    /// <summary>
    /// Платформа IMDB
    /// </summary>
    public class IMDB_Platform : IPlatform
    {
        Strategy_SearchAbstract _strategyToSearch;
        /// <summary>
        /// Конструктор платформы для поиска фильмов IMDB
        /// </summary>
        /// <param name="strategyToSearch">Стратегия для поиска</param>
        public IMDB_Platform(Strategy_SearchAbstract strategyToSearch)
        {
            this._strategyToSearch = strategyToSearch;
        }

        /// <summary>
        /// Методы замен стратегии поиска для платформы IMDB
        /// </summary>
        /// <param name="strategyToSearch">Стратегия для замены</param>
        public void ChangeSearchStrategy(Strategy_SearchAbstract strategyToSearch)
        {
            this._strategyToSearch = strategyToSearch;
        }

        /// <summary>
        /// Метод создания строки запроса, используя название или часть названия фильма
        /// </summary>
        /// <param name="FilmName"></param>
        /// <returns></returns>
        public IQueryModel CreateQueryResponseByFilmName (string FilmName)
        {
            return _strategyToSearch.ConstructQuerySearchByFilmName(FilmName);

        }

    }
}
