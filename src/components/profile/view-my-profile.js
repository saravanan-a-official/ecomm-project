import { PaperClipIcon } from '@heroicons/react/20/solid'

export default function ViewMyProfile() {
    return (
        <div className='App view-profile mx-20'>
            <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h1 className="text-2xl font-medium leading-6 text-gray-900">My Profile</h1>
                    <p className="mt-1 text-lg text-gray-500">Profile details</p>
                </div>
                <div className="border-t border-gray-200">
                    <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-xl font-medium text-gray-500">Full name</dt>
                            <dd className="mt-1 text-sm text-gray-900  sm:mt-0">Margot Foster</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-xl font-medium text-gray-500">Application for</dt>
                            <dd className="mt-1 text-sm text-gray-900  sm:mt-0">Backend Developer</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-xl font-medium text-gray-500">Email address</dt>
                            <dd className="mt-1 text-sm text-gray-900  sm:mt-0">margotfoster@example.com</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-xl font-medium text-gray-500">Salary expectation</dt>
                            <dd className="mt-1 text-sm text-gray-900  sm:mt-0">$120,000</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    )
}
