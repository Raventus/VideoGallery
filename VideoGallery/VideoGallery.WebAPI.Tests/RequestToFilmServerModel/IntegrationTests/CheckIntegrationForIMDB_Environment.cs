using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using VideoGallery.Common.Abstract;
using VideoGallery.Common.VideoSearchServers;
using VideoGallery.Common.WebCommon;
using VideoGallery.PlatformModel.Abstract;
using VideoGallery.PlatformModel.PlatformConcrete;
using VideoGallery.PlatformModel.QueryBuilderConcrete;
using VideoGallery.PlatformModel.SearchStrategyConcrete;

namespace VideoGallery.WebAPI.Tests.RequestToFilmServerModel.IntegrationTests
{
    [TestClass]
    public class CheckIntegrationForIMDB_Environment
    {
        
        [TestMethod]
        public void Check_Integration_With_FilmSearchServer_for_IMDB_Platform()
        {
            //Asssert
            string QueryString = "Godfather";
            IBuilder_FilmSearchQuery queryBuilder = new Builder_QuerySearch_IMDB_With_OpenDataBaseApi();
            Strategy_SearchAbstract strategyToSearch = new Strategy_IMDB_Search_With_OpenDataBaseApi(queryBuilder);
            IFilmPlatform filmPlatform = new IMDB_Platform(strategyToSearch);
            IRequestToFilmDataServerStrategy RequestToFilmDataServerStrategy = new RequestToFilmServerStrategy();

            IFilmSearchServer IMDBPlatform = new FilmSearchServer_for_IMDB_Platform(filmPlatform, RequestToFilmDataServerStrategy);

            // Act
            var OutPutString = IMDBPlatform.GetListOfFilmsByFilmNameSearchQuery(QueryString);

            //Assert
            Assert.IsTrue(OutPutString.Result.Contains("\"Title\":\"The Godfather\",\"Year\":\"1972\""));
        }
    }
}
