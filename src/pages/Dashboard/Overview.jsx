import Layout from "../../components/Dash/Layout";

const Overview = () => {
    return (
        <Layout>
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-bold">Overview</h1>
                <p className="text-gray-600">This is the overview page.</p>
            </div>
        </Layout>
    );
}

export default Overview;