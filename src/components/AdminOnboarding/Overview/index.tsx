import chart_one from '../../../assets/image/chart_one.png'
import chart_two from '../../../assets/image/chart_two.png'
import chart_three from '../../../assets/image/chart_three.png'


const Overview = () => {
  return (
    <div className="py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Subscription Card */}
        <div className="p-6 bg-white rounded-lg border border-gray-200 ">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg font-semibold text-gray-800">Number of individuals</span>
            <div className="flex items-center gap-2 bg-gray-100 py-1 px-3 rounded-lg border border-gray-300">
              <span className="text-sm text-gray-600">Monthly</span>
              <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 0.75L6 5.25L10.5 0.75" stroke="#939090" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between">
            {/* Total Count */}
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Total Count</span>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-900">250</span>
                <span className="text-sm text-gray-500">(+24 this month)</span>
              </div>
            </div>

            {/* Divider */}
            <div className="w-px h-10 bg-gray-200" />

            {/* New Subscriptions */}
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">New Users</span>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-900">45</span>
                <span className="text-sm text-gray-500">(-4 this month)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg border border-gray-200 ">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg font-semibold text-gray-800">Number of businesses</span>
            <div className="flex items-center gap-2 bg-gray-100 py-1 px-3 rounded-lg border border-gray-300">
              <span className="text-sm text-gray-600">Monthly</span>
              <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 0.75L6 5.25L10.5 0.75" stroke="#939090" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between">
            {/* Total Count */}
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Total Count</span>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-900">63</span>
                <span className="text-sm text-gray-500">(+24 this month)</span>
              </div>
            </div>

            {/* Divider */}
            <div className="w-px h-10 bg-gray-200" />

            {/* New Subscriptions */}
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">New Users</span>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-900">10</span>
                <span className="text-sm text-gray-500">(-4 this month)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg border border-gray-200 ">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg font-semibold text-gray-800">Active subscriptions</span>
            <div className="flex items-center gap-2 bg-gray-100 py-1 px-3 rounded-lg border border-gray-300">
              <span className="text-sm text-gray-600">Monthly</span>
              <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 0.75L6 5.25L10.5 0.75" stroke="#939090" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between">
            {/* Total Count */}
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Total Count</span>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-900">190</span>
                <span className="text-sm text-gray-500">(+24 this month)</span>
              </div>
            </div>

            {/* Divider */}
            <div className="w-px h-10 bg-gray-200" />

            {/* New Subscriptions */}
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">New Subs</span>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-900">10</span>
                <span className="text-sm text-gray-500">(-4 this month)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg border border-gray-200">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg font-semibold text-gray-800">Courses</span>
            <div className="flex items-center gap-2 bg-gray-100 py-1 px-3 rounded-lg border border-gray-300">
              <span className="text-sm text-gray-600">Monthly</span>
              <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 0.75L6 5.25L10.5 0.75" stroke="#939090" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between">
            {/* Total Count */}
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Total Count</span>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-900">250</span>
                <span className="text-sm text-gray-500">(+24 this month)</span>
              </div>
            </div>

            {/* Divider */}
            <div className="w-px h-10 bg-gray-200" />

            {/* New Subscriptions */}
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Completion rate</span>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-900">59.5%</span>
                <span className="text-sm text-gray-500">(-4 this month)</span>
              </div>
            </div>
          </div>
        </div>
        {/* Additional Cards (similar to the one above) */}
        {/* Repeat the card structure for "Courses", "Completion rate", etc., and update their stats. */}
      </div>

      <div className='flex items-center gap-4'>
        <div className=" flex w-[552px] p-[12px] flex-col gap-[24px] items-start bg-[#fff] rounded-[12px] border border-[#f3edf7]  my-4">
          <div className="flex justify-between items-center w-full">
            <span className="font-medium text-[18px] text-[#141218]">
              User engagements
            </span>
            <div className="flex gap-[24px] justify-end items-center">
              <div className="flex gap-[16px] items-start">
                <div className="flex gap-[7px] items-center">
                  <div className="w-[10px] h-[10px] bg-[#0086f2] rounded-full" />
                  <span className="text-[14px] opacity-40 text-[#000]">
                    Active users
                  </span>
                </div>
                <div className="flex gap-[7px] items-center">
                  <div className="w-[10px] h-[10px] bg-[#ff8981] rounded-full" />
                  <span className="text-[14px] opacity-40 text-[#000]">
                    Inactive users
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-[8px] p-[9px] bg-[#f7f8fa] rounded-[12px] border border-[#ebeef2]">
                <span className="text-[14px] text-[#797676]">
                  Monthly
                </span>
                <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 0.75L6 5.25L10.5 0.75" stroke="#939090" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              </div>
            </div>
          </div>
          <div>
            <img src={chart_one} />

          </div>
        </div>

        <div className=" flex w-[552px] px-4 py-8 flex-col gap-[24px] items-start bg-[#fff] rounded-[12px] border border-[#f3edf7]  my-4">
          <div className="flex justify-between items-center w-full">
            <span className="font-medium text-[18px] text-[#141218]">
              New registrations
            </span>
            <div className="flex gap-[24px] justify-end items-center">
              <div className="flex items-center gap-[8px] p-[9px] bg-[#f7f8fa] rounded-[12px] border border-[#ebeef2]">
                <span className="text-[14px] text-[#797676]">
                  Monthly
                </span>
                <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 0.75L6 5.25L10.5 0.75" stroke="#939090" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              </div>
            </div>
          </div>
          <div>
            <img src={chart_two} />

          </div>
        </div>

        <div className=" flex w-[552px] p-[12px] flex-col gap-[24px] items-start bg-[#fff] rounded-[12px] border border-[#f3edf7]  my-4">
          <div className="flex justify-between items-center w-full">
            <span className="font-medium text-[18px] text-[#141218]">
              Subscription analytics
            </span>
            <div className="flex gap-[24px] justify-end items-center">

              <div className="flex items-center gap-[8px] p-[9px] bg-[#f7f8fa] rounded-[12px] border border-[#ebeef2]">
                <span className="text-[14px] text-[#797676]">
                  Monthly
                </span>
                <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 0.75L6 5.25L10.5 0.75" stroke="#939090" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
          </div>
          <div className='mx-auto '>
            <img src={chart_three} />

          </div>
          <div className='flex border w-full justify-between p-4 rounded-md'>
            <div>
              <span className='text-gray-600'>Total count</span>
              <h1 className='font-medium text-xl'>190</h1>
            </div>
            <div>
              <div className='flex items-center gap-2'>
                <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="4.5" r="4" fill="#0086F2" />
                </svg>

                <span className='text-gray-600'>Basic</span>

              </div>

              <h1 className='font-medium text-xl text-center'>72</h1>
            </div>

            <div>
              <div className='flex items-center gap-2'>
                <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="4.5" r="4" fill="#6750A4" />
                </svg>

                <span className='text-gray-600'>Pro</span>

              </div>

              <h1 className='font-medium text-xl text-center'>68</h1>
            </div>
            <div>
              <div className='flex items-center gap-2'>
                <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="4.5" r="4" fill="#C4D905" />
                </svg>
                <span className='text-gray-600'>Advanced</span>

              </div>

              <h1 className='font-medium text-xl text-center'>50</h1>
            </div>

          </div>
        </div>

      </div>




      <div>
        <div className="flex flex-col w-[548px] rounded-[12px] border border-[#ebeef2] my-4">

          <div className="flex items-center justify-between h-[60px] px-[16px] bg-white ">
            <span className="text-lg font-medium text-[#141218]">Top-performing courses</span>
            <div className="flex items-center gap-[16px]">
              <div className="flex items-center gap-[8px] bg-[#f7f8fa] rounded-[12px] border border-[#ebeef2] px-[12px] py-[9px]">
                <span className="text-sm text-[#797676]">Monthly</span>
                <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 0.75L6 5.25L10.5 0.75" stroke="#939090" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              </div>
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 6H12.5M1.25 1.5H14.75M5.75 10.5H10.25" stroke="#939090" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </div>
          </div>


          <div className="flex items-center h-[48px] bg-[#f7f8fa] border-t border-[#ebeef2]">
            <div className="flex items-center gap-[8px] px-[16px] w-1/3">
              <span className="text-sm  opacity-40">Title</span>
            </div>
            <div className="flex items-center gap-[8px] px-[16px] w-1/3">
              <span className="text-sm  opacity-40">Completion rate</span>
            </div>
            <div className="flex items-center gap-[8px] px-[16px] w-1/3">
              <span className="text-sm  opacity-40">Average ratings</span>
            </div>
          </div>


          <div className="flex flex-col">

            <div className="flex items-center h-[58px]  border-t border-[#ebeef2]">
              <div className="flex items-center gap-[20px] px-[16px] w-1/3">
                <span className="text-sm font-medium text-[#1c1b1c]">Money Matters</span>
              </div>
              <div className="flex items-center gap-[8px] px-[16px] w-1/3">
                <span className="text-sm font-medium text-[#1c1b1c]">49.4%</span>
              </div>
              <div className="flex items-center gap-[8px] px-[16px] w-1/3">
                <div className="flex items-center gap-[4px]">
                  <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.2871 6.90521C18.1692 6.54073 17.846 6.28186 17.4635 6.24739L12.2682 5.77565L10.2138 0.967224C10.0624 0.614828 9.71737 0.386719 9.33408 0.386719C8.95078 0.386719 8.6058 0.614828 8.45432 0.968048L6.39996 5.77565L1.20385 6.24739C0.822062 6.28268 0.499605 6.54073 0.381087 6.90521C0.262569 7.26969 0.372023 7.66947 0.660834 7.92147L4.58786 11.3655L3.42987 16.4664C3.34514 16.8415 3.49071 17.2292 3.80191 17.4541C3.96918 17.575 4.16488 17.6365 4.36222 17.6365C4.53238 17.6365 4.70116 17.5907 4.85264 17.5L9.33408 14.8216L13.8139 17.5C14.1417 17.6972 14.5549 17.6792 14.8654 17.4541C15.1768 17.2285 15.3222 16.8407 15.2375 16.4664L14.0795 11.3655L18.0065 7.92216C18.2953 7.66947 18.4056 7.27038 18.2871 6.90521Z" fill="#FFC107" />
                  </svg>

                  <span className="text-sm text-[#2f3033]">4.91</span>
                </div>
              </div>
            </div>

            <div className="flex items-center h-[58px]  border-t border-[#ebeef2]">
              <div className="flex items-center gap-[20px] px-[16px] w-1/3">
                <span className="text-sm font-medium text-[#1c1b1c]">Money Matters</span>
              </div>
              <div className="flex items-center gap-[8px] px-[16px] w-1/3">
                <span className="text-sm font-medium text-[#1c1b1c]">49.4%</span>
              </div>
              <div className="flex items-center gap-[8px] px-[16px] w-1/3">
                <div className="flex items-center gap-[4px]">
                  <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.2871 6.90521C18.1692 6.54073 17.846 6.28186 17.4635 6.24739L12.2682 5.77565L10.2138 0.967224C10.0624 0.614828 9.71737 0.386719 9.33408 0.386719C8.95078 0.386719 8.6058 0.614828 8.45432 0.968048L6.39996 5.77565L1.20385 6.24739C0.822062 6.28268 0.499605 6.54073 0.381087 6.90521C0.262569 7.26969 0.372023 7.66947 0.660834 7.92147L4.58786 11.3655L3.42987 16.4664C3.34514 16.8415 3.49071 17.2292 3.80191 17.4541C3.96918 17.575 4.16488 17.6365 4.36222 17.6365C4.53238 17.6365 4.70116 17.5907 4.85264 17.5L9.33408 14.8216L13.8139 17.5C14.1417 17.6972 14.5549 17.6792 14.8654 17.4541C15.1768 17.2285 15.3222 16.8407 15.2375 16.4664L14.0795 11.3655L18.0065 7.92216C18.2953 7.66947 18.4056 7.27038 18.2871 6.90521Z" fill="#FFC107" />
                  </svg>

                  <span className="text-sm text-[#2f3033]">4.91</span>
                </div>
              </div>
            </div>

            <div className="flex items-center h-[58px]  border-t border-[#ebeef2]">
              <div className="flex items-center gap-[20px] px-[16px] w-1/3">
                <span className="text-sm font-medium text-[#1c1b1c]">Money Matters</span>
              </div>
              <div className="flex items-center gap-[8px] px-[16px] w-1/3">
                <span className="text-sm font-medium text-[#1c1b1c]">49.4%</span>
              </div>
              <div className="flex items-center gap-[8px] px-[16px] w-1/3">
                <div className="flex items-center gap-[4px]">
                  <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.2871 6.90521C18.1692 6.54073 17.846 6.28186 17.4635 6.24739L12.2682 5.77565L10.2138 0.967224C10.0624 0.614828 9.71737 0.386719 9.33408 0.386719C8.95078 0.386719 8.6058 0.614828 8.45432 0.968048L6.39996 5.77565L1.20385 6.24739C0.822062 6.28268 0.499605 6.54073 0.381087 6.90521C0.262569 7.26969 0.372023 7.66947 0.660834 7.92147L4.58786 11.3655L3.42987 16.4664C3.34514 16.8415 3.49071 17.2292 3.80191 17.4541C3.96918 17.575 4.16488 17.6365 4.36222 17.6365C4.53238 17.6365 4.70116 17.5907 4.85264 17.5L9.33408 14.8216L13.8139 17.5C14.1417 17.6972 14.5549 17.6792 14.8654 17.4541C15.1768 17.2285 15.3222 16.8407 15.2375 16.4664L14.0795 11.3655L18.0065 7.92216C18.2953 7.66947 18.4056 7.27038 18.2871 6.90521Z" fill="#FFC107" />
                  </svg>

                  <span className="text-sm text-[#2f3033]">4.91</span>
                </div>
              </div>
            </div>

            <div className="flex items-center h-[58px]  border-t border-[#ebeef2]">
              <div className="flex items-center gap-[20px] px-[16px] w-1/3">
                <span className="text-sm font-medium text-[#1c1b1c]">Money Matters</span>
              </div>
              <div className="flex items-center gap-[8px] px-[16px] w-1/3">
                <span className="text-sm font-medium text-[#1c1b1c]">49.4%</span>
              </div>
              <div className="flex items-center gap-[8px] px-[16px] w-1/3">
                <div className="flex items-center gap-[4px]">
                  <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.2871 6.90521C18.1692 6.54073 17.846 6.28186 17.4635 6.24739L12.2682 5.77565L10.2138 0.967224C10.0624 0.614828 9.71737 0.386719 9.33408 0.386719C8.95078 0.386719 8.6058 0.614828 8.45432 0.968048L6.39996 5.77565L1.20385 6.24739C0.822062 6.28268 0.499605 6.54073 0.381087 6.90521C0.262569 7.26969 0.372023 7.66947 0.660834 7.92147L4.58786 11.3655L3.42987 16.4664C3.34514 16.8415 3.49071 17.2292 3.80191 17.4541C3.96918 17.575 4.16488 17.6365 4.36222 17.6365C4.53238 17.6365 4.70116 17.5907 4.85264 17.5L9.33408 14.8216L13.8139 17.5C14.1417 17.6972 14.5549 17.6792 14.8654 17.4541C15.1768 17.2285 15.3222 16.8407 15.2375 16.4664L14.0795 11.3655L18.0065 7.92216C18.2953 7.66947 18.4056 7.27038 18.2871 6.90521Z" fill="#FFC107" />
                  </svg>

                  <span className="text-sm text-[#2f3033]">4.91</span>
                </div>
              </div>
            </div>

            <div className="flex items-center h-[58px]  border-t border-[#ebeef2]">
              <div className="flex items-center gap-[20px] px-[16px] w-1/3">
                <span className="text-sm font-medium text-[#1c1b1c]">Money Matters</span>
              </div>
              <div className="flex items-center gap-[8px] px-[16px] w-1/3">
                <span className="text-sm font-medium text-[#1c1b1c]">49.4%</span>
              </div>
              <div className="flex items-center gap-[8px] px-[16px] w-1/3">
                <div className="flex items-center gap-[4px]">
                  <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.2871 6.90521C18.1692 6.54073 17.846 6.28186 17.4635 6.24739L12.2682 5.77565L10.2138 0.967224C10.0624 0.614828 9.71737 0.386719 9.33408 0.386719C8.95078 0.386719 8.6058 0.614828 8.45432 0.968048L6.39996 5.77565L1.20385 6.24739C0.822062 6.28268 0.499605 6.54073 0.381087 6.90521C0.262569 7.26969 0.372023 7.66947 0.660834 7.92147L4.58786 11.3655L3.42987 16.4664C3.34514 16.8415 3.49071 17.2292 3.80191 17.4541C3.96918 17.575 4.16488 17.6365 4.36222 17.6365C4.53238 17.6365 4.70116 17.5907 4.85264 17.5L9.33408 14.8216L13.8139 17.5C14.1417 17.6972 14.5549 17.6792 14.8654 17.4541C15.1768 17.2285 15.3222 16.8407 15.2375 16.4664L14.0795 11.3655L18.0065 7.92216C18.2953 7.66947 18.4056 7.27038 18.2871 6.90521Z" fill="#FFC107" />
                  </svg>

                  <span className="text-sm text-[#2f3033]">4.91</span>
                </div>
              </div>
            </div>


          </div>
        </div>

      </div>
    </div>
  );
};

export default Overview;
