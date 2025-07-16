
export type ProgramResearchStatus = {
  status: boolean
}

const ResearchProgramStatusContent = ({ status }: ProgramResearchStatus) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>電源</th>
            <td>{status ? 'ON' : 'OFF'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResearchProgramStatusContent;
