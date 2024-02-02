import PropTypes from 'prop-types';

const CandidateTable = (props) => {

    const { isLoading, candidates, onEdit, onDelete, onAdd } = props;

    return (
        <div className="mt-8">
            <button className="bg-blue-500 text-white px-4 py-2 mb-4 rounded" onClick={onAdd}>
                Add New Candidate
            </button>
            <table className="min-w-full border border-gray-300">
                <thead>
                    <tr>
                        <th className="border bg-gray-200 px-4 py-2">ID</th>
                        <th className="border bg-gray-200 px-4 py-2">Name</th>
                        <th className="border bg-gray-200 px-4 py-2">Email</th>
                        <th className="border bg-gray-200 px-4 py-2">Phone</th>
                        <th className="border bg-gray-200 px-4 py-2">Score</th>
                        <th className="border bg-gray-200 px-4 py-2">Expected Salary ($)</th>
                        <th className="border bg-gray-200 px-4 py-2">Status</th>
                        <th className="border bg-gray-200 px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {isLoading && <tr><td colSpan={8} className='text-center p-4'>Loading...</td></tr>}
                    {!isLoading && candidates && candidates.length === 0
                        && <tr><td colSpan={8} className='text-center p-4'>No Candidates</td></tr>}

                    {candidates.map((item) => (
                        <tr key={item.candidateid}>
                            <td className="border px-4 py-2">{item.candidateid}</td>
                            <td className="border px-4 py-2">{item.name}</td>
                            <td className="border px-4 py-2">{item.email}</td>
                            <td className="border px-4 py-2">{item.phone}</td>
                            <td className="border px-4 py-2">{item.score}</td>
                            <td className="border px-4 py-2">
                                {Number(item.salary).toLocaleString('en-IN', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                })}
                            </td>
                            <td className="border px-4 py-2">{item.status}</td>
                            <td className="border px-4 py-2">
                                <button
                                    className="bg-yellow-500 text-white px-2 py-1 mr-2 rounded"
                                    onClick={() => onEdit(item.candidateid)}>
                                    Edit
                                </button>
                                <button
                                    className="bg-red-500 text-white px-2 py-1 rounded"
                                    onClick={() => onDelete(item.candidateid)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

CandidateTable.propTypes = {
    isLoading: PropTypes.bool,
    candidates: PropTypes.array,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
    onAdd: PropTypes.func
};

export default CandidateTable;