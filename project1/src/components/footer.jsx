import FootNotes from "../pages/footer/FootNotes";
import LinkArea from "../pages/footer/LinkArea";
import Newsletter from "../pages/footer/Newsletter";

export const Footer=()=>{

    return (<footer className="bg-gray-200 antialiased">
  <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <div className="border-b border-gray-100 py-6 md:py-8 lg:py-16">
      <div className="flex flex-col lg:flex-row items-start gap-6 md:gap-8 2xl:gap-24">
       <LinkArea/>
        <div className="md:mt-8 mt-6 w-full lg:mt-0 lg:max-w-md xl:max-w-lg">
          <Newsletter/>
        </div>
      
    </div>
    <FootNotes/>
  </div>
  </div>
</footer>
);
};