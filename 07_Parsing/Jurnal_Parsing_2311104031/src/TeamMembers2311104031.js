import fs from 'fs';

class TeamMembers2311104031 {
  static ReadJSON() {
    const rawData = fs.readFileSync('./Data_JSON/jurnal7_2_2311104031.json');
    const json = JSON.parse(rawData);
    const members = json.members;

    console.log("Team member list:");
    members.forEach(member => {
      const fullName = `${member.firstName} ${member.lastName}`;
      console.log(`${member.nim} ${fullName} (${member.age} ${member.gender})`);
    });
  }
}

export default TeamMembers2311104031;
