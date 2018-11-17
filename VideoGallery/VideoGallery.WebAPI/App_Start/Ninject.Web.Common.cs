[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(VideoGallery.WebAPI.App_Start.NinjectWebCommon), "Start")]
[assembly: WebActivatorEx.ApplicationShutdownMethodAttribute(typeof(VideoGallery.WebAPI.App_Start.NinjectWebCommon), "Stop")]

namespace VideoGallery.WebAPI.App_Start
{
    using System;
    using System.Web;
    using System.Web.Http;
    using Microsoft.Web.Infrastructure.DynamicModuleHelper;

    using Ninject;
    using Ninject.Web.Common;
    using Ninject.Web.Common.WebHost;
    using Ninject.Web.Mvc;
    using VideoGallery.Abstract;
    using VideoGallery.VideoSearchServers;
    using VideoGallery.PlatformModel.Abstract;
    using VideoGallery.PlatformModel.PlatformConcrete;
    using VideoGallery.PlatformModel.QueryBuilderConcrete;
    using VideoGallery.PlatformModel.SearchStrategyConcrete;
    using VideoGallery.RequestToFilmServerModel.RequestFilmServerStrategy;

    public static class NinjectWebCommon 
    {
        private static readonly Bootstrapper bootstrapper = new Bootstrapper();

        /// <summary>
        /// Starts the application
        /// </summary>
        public static void Start() 
        {
            DynamicModuleUtility.RegisterModule(typeof(OnePerRequestHttpModule));
            DynamicModuleUtility.RegisterModule(typeof(NinjectHttpModule));
            bootstrapper.Initialize(CreateKernel);
        }
        
        /// <summary>
        /// Stops the application.
        /// </summary>
        public static void Stop()
        {
            bootstrapper.ShutDown();
        }
        
        /// <summary>
        /// Creates the kernel that will manage your application.
        /// </summary>
        /// <returns>The created kernel.</returns>
        private static IKernel CreateKernel()
        {
            var kernel = new StandardKernel();
            try
            {
                kernel.Bind<Func<IKernel>>().ToMethod(ctx => () => new Bootstrapper().Kernel);
                kernel.Bind<IHttpModule>().To<HttpApplicationInitializationHttpModule>();
                RegisterServices(kernel);
               
                return kernel;
            }
            catch
            {
                kernel.Dispose();
                throw;
            }
        }

        /// <summary>
        /// Load your modules or register your services here!
        /// </summary>
        /// <param name="kernel">The kernel.</param>
        private static void RegisterServices(IKernel kernel)
        {

            System.Web.Mvc.DependencyResolver.SetResolver(new NinjectDependencyResolver(kernel));
            kernel.Bind<IBuilder_FilmSearchQuery>().To<BuilderQuerySearchIMDBWithOpenDataBaseApi>();
            kernel.Bind<Strategy_SearchAbstract>().To<Strategy_IMDB_Search_With_OpenDataBaseApi>();
            kernel.Bind<IRequestToFilmDataServerStrategy>().To<RequestToFilmServerStrategy>();
            kernel.Bind<IFilmPlatform>().To<IMDB_Platform>();

            kernel.Bind<IFilmSearchServer>().To<FilmSearchServer_for_IMDB_Platform>();
       
        }        
    }
}