using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VideoGallery.PlatformModel.Abstract;

namespace VideoGallery.PlatformModel.PlatformConcrete
{
    public class IMDB_Platform : IPlatform
    {
        SearchStrategyAbstract _strategyToSearch;
        /// <summary>
        /// Конструктор платформы для поиска фильмов IMDB
        /// </summary>
        /// <param name="strategyToSearch">Стратегия для поиска</param>
        public IMDB_Platform(SearchStrategyAbstract strategyToSearch)
        {
            this._strategyToSearch = strategyToSearch;
        }

        /// <summary>
        /// Методы замен стратегии поиска для платформы IMDB
        /// </summary>
        /// <param name="strategyToSearch">Стратегия для замены</param>
        public void ChangeSearchStrategy(SearchStrategyAbstract strategyToSearch)
        {
            this._strategyToSearch = strategyToSearch;
        }


        /// <summary>
        /// Поиск
        /// </summary>
        /// <param name="queryBuilder"></param>
        /// <returns></returns>
        public IEnumerable<IFilmModel> Search(IQuerySearchFilmBuilder queryBuilder)
        {
            return _strategyToSearch.SearchFilmsByStringQuery(queryBuilder);
        }
    }
}
