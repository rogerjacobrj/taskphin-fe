import PropTypes from 'prop-types';

const CandidateTable = (props) => {

    const { candidates, onEdit, onDelete, onAdd } = props;

    return (
        <div className="mt-8">
            <button className="bg-blue-500 text-white px-4 py-2 mb-4" onClick={onAdd}>
                Add New Candidate
            </button>
            <table className="min-w-full border border-gray-300">
                <thead>
                    <tr>
                        <th className="border bg-gray-200 px-4 py-2">ID</th>
                        <th className="border bg-gray-200 px-4 py-2">Name</th>
                        <th className="border bg-gray-200 px-4 py-2">Email</th>
                        <th className="border bg-gray-200 px-4 py-2">Phone</th>
                        <th className="border bg-gray-200 px-4 py-2">Experience</th>
                        <th className="border bg-gray-200 px-4 py-2">Expected Salary</th>
                        <th className="border bg-gray-200 px-4 py-2">Status</th>
                        <th className="border bg-gray-200 px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {candidates.map((candidate) => (
                        <tr key={candidate.id}>
                            <td className="border px-4 py-2">{candidate.id}</td>
                            <td className="border px-4 py-2">{candidate.name}</td>
                            <td className="border px-4 py-2">{candidate.email}</td>
                            <td className="border px-4 py-2">{candidate.phone}</td>
                            <td className="border px-4 py-2">{candidate.experience}</td>
                            <td className="border px-4 py-2">{candidate.salary}</td>
                            <td className="border px-4 py-2">{candidate.status}</td>
                            <td className="border px-4 py-2">
                                <button
                                    className="bg-yellow-500 text-white px-2 py-1 mr-2"
                                    onClick={() => onEdit(candidate.id)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red-500 text-white px-2 py-1"
                                    onClick={() => onDelete(candidate.id)}
                                >
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
    candidates: PropTypes.array,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
    onAdd: PropTypes.func
};

export default CandidateTable;