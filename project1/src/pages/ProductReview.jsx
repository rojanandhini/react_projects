import React from 'react'
import useProdReviewFetch from '../hooks/useProdReviewFetch';

const ProductReview = () => {
    const {proddata,reviews} = useProdReviewFetch();
     // calculate count of each star rating for summary
    const ratingCounts = reviews.reduce((acc, r) => {
      const star = Math.round(r.rating);
      acc[star] = (acc[star] || 0) + 1;
      return acc;
    }, {});
  return (
     <div id="revie" className=" mx-auto max-w-screen-xl px-4 2xl:px-0">
      <div className="flex items-center gap-2">
        <h2 className="text-2xl font-semibold text-gray-900 ">
          Reviews
        </h2>
        <div className="mt-2 flex items-center gap-2 sm:mt-0">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: Math.round(proddata?.rating || 0) }).map((_, i) => (
              <svg
                key={i}
                className="h-4 w-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
            ))}
          </div>
          <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
            ({reviews.length})
          </p>
        </div>
      </div>
    
      {/* dynamic rating distribution */}
      <div className="my-6 gap-8 sm:flex sm:items-start md:my-8">
        <div className="shrink-0 space-y-4">
          <p className="text-2xl font-semibold leading-none text-gray-900 ">
            {proddata?.rating?.toFixed(1)} out of 5
          </p>
          <button
            type="button"
            className="mb-2 me-2 rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Write a review
          </button>
        </div>
        <div className="flex-none w-72 space-y-3">
          {[5,4,3,2,1].map(star => {
            const count = ratingCounts[star] || 0;
            const pct = reviews.length ? (count / reviews.length) * 100 : 0;
            return (
              <div key={star} className="flex items-center gap-2">
                <p className="w-2 shrink-0 text-start text-sm font-medium leading-none text-gray-900 ">
                  {star}
                </p>
                <div className="h-1.5 flex-1 rounded-full bg-gray-200 dark:bg-gray-700">
                  <div
                    className="h-1.5 rounded-full bg-yellow-300"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="w-8 text-right text-sm font-medium leading-none text-primary-700 dark:text-primary-500">
                  {count}
                </span>
              </div>
            );
          })}
        </div>
      </div>
       
  
      {/* render individual reviews */}
      {reviews.map((r, idx) => (
        <div key={idx} className="border-b py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              {Array.from({ length: Math.round(r.rating) }).map((_, i) => (
                <svg
                  key={i}
                  className="h-4 w-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-500">
              {new Date(r.date).toLocaleDateString()}
            </span>
          </div>
          <p className="mt-2 text-gray-700">{r.comment}</p>
          <p className="mt-1 text-sm font-medium">{r.reviewerName}</p>
        </div>
      ))}
    </div>
  )
}

export default ProductReview