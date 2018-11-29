using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using VideoGallery.Abstract;
using VideoGallery.VideoSearchServers;
using VideoGallery.PlatformModel.Abstract;
using VideoGallery.PlatformModel.PlatformConcrete;
using VideoGallery.PlatformModel.QueryBuilderConcrete;
using VideoGallery.PlatformModel.SearchStrategyConcrete;
using VideoGallery.RequestToFilmServerModel.RequestFilmServerStrategy;

namespace VideoGallery.WebAPI.Tests.VideoSearchServers
{
    [TestClass]
    public class FilmSearchServerForIMDBPlatformTests
    {
        
        [TestMethod]
        public void GetListOfFilmsByFilmNameSearchQuery_WithGodfatherParameter_ReturnsCorrectJSONFromIMDBServerIntegration()
        {
            //Asssert
            string QueryString = "Godfather";
            IBuilder_FilmSearchQuery queryBuilder = new BuilderQuerySearchIMDBWithOpenDataBaseApi();
            Strategy_SearchAbstract strategyToSearch = new Strategy_IMDB_Search_With_OpenDataBaseApi(queryBuilder);
            IFilmPlatform filmPlatform = new IMDB_Platform(strategyToSearch);
            IRequestToFilmDataServerStrategy RequestToFilmDataServerStrategy = new RequestToFilmServerStrategy();

            IFilmSearchServer IMDBPlatform = new FilmSearchServer_for_IMDB_Platform(filmPlatform, RequestToFilmDataServerStrategy);

            // Act
            var OutPutString = IMDBPlatform.GetListOfFilmsByFilmNameSearchQuery(QueryString, "1");

            //Assert
            Assert.IsTrue(OutPutString.Result.Contains("\"Title\":\"The Godfather\",\"Year\":\"1972\""));
        }
    }
}
