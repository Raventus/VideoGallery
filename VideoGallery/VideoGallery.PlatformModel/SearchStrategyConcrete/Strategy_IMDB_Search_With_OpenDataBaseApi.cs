using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VideoGallery.PlatformModel.Abstract;

namespace VideoGallery.PlatformModel.SearchStrategyConcrete
{
    /// <summary>
    /// Стратегия поиска фильмов на платформе IMDB используя OpenDataBaseApi
    /// </summary>
    public class Strategy_IMDB_Search_With_OpenDataBaseApi : Strategy_SearchAbstract
    {
        IBuilder_FilmSearchQuery _builder;
        /// <summary>
        /// Конструктор стратегии поиска 
        /// </summary>
        /// <param name="builder">Строитель объекта для запроса</param>
        public Strategy_IMDB_Search_With_OpenDataBaseApi(IBuilder_FilmSearchQuery builder)
        {
            SetBuilder(builder);
        }

        public void SetBuilder(IBuilder_FilmSearchQuery builder)
        {
            this._builder = builder;
        }

       /// <summary>
       /// Построение строки запроса, используя название фильма и год создания
       /// </summary>
       /// <param name="name">Название фильма </param>
       /// <param name="year">Год создания</param>
       /// <returns></returns>
        public override IQueryModel ConstructQuerySearchByNameAndYear(string name, string year, string page)
        {
            _builder.ClearQueryObject();           
            _builder.BuildNameOfFilm(name);
            _builder.BuildYearOfFoundation(year);
            _builder.BuildPageNumber(page);
            return _builder.GetQueryObject();
        }

        /// <summary>
        /// Построение строки запроса, используя название фильма
        /// </summary>
        /// <param name="name">Название фильма</param>
        /// <returns></returns>
        public override IQueryModel ConstructQuerySearchByFilmName(string name, string page)
        {
            _builder.ClearQueryObject();
            _builder.BuildNameOfFilm(name);
            _builder.BuildPageNumber(page);
            return _builder.GetQueryObject();
        }
    }
}
