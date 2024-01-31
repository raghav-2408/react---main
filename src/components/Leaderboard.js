import React from 'react'
import { Link } from 'react-router-dom'
// import Navbar from './Navbar'

export default function Leaderboard(props) {
    return (
        <>
            {/* Navbar */}


            {/* Content */}
            <div className={`tb`}>
                <Link to='/home'></Link>
                <table className={`table border = '5' text-${props.white}`}>
                    <thead >
                        <tr>
                            <th scope="col">Rank</th>
                            <th scope="col">Handles</th>
                            <th scope="col">Codeforces Handle</th>
                            <th scope="col">Codeforces Rating</th>
                            <th scope="col">GFG Handle</th>
                            <th scope="col">GFG Contest Score</th>
                            <th scope="col">GFG Practice Score</th>
                            <th scope="col">Leetcode Handle</th>
                            <th scope="col">Leetcode Score</th>
                            <th scope="col">Codechef Handle</th>
                            <th scope="col">Codechef Score</th>
                            <th scope="col">HackerRank Handle</th>
                            <th scope="col">HackerRank Score</th>
                            <th scope="col">Total Percentile</th>
                        </tr>
                    </thead>

                    <tbody className="table-group-divider">
                        <tr>
                            <th scope="row">1</th>
                            <td>21r01aXXXX</td>
                            <td>cmrit25_21r01aXXXX</td>
                            <td>NA</td>
                            <td>@studname123</td>
                            <td>NA</td>
                            <td>NA</td>
                            <td>@studname123</td>
                            <td>NA</td>
                            <td>@studname123</td>
                            <td>NA</td>
                            <td>@studname123</td>
                            <td>NA</td>
                            <td>NA</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>21r01aXXXX</td>
                            <td>cmrit25_21r01aXXXX</td>
                            <td>NA</td>
                            <td>@studname123</td>
                            <td>NA</td>
                            <td>NA</td>
                            <td>@studname123</td>
                            <td>NA</td>
                            <td>@studname123</td>
                            <td>NA</td>
                            <td>@studname123</td>
                            <td>NA</td>
                            <td>NA</td>
                        </tr>

                        <tr>
                            <th scope="row">3</th>
                            <td>21r01aXXXX</td>
                            <td>cmrit25_21r01aXXXX</td>
                            <td>NA</td>
                            <td>@studname123</td>
                            <td>NA</td>
                            <td>NA</td>
                            <td>@studname123</td>
                            <td>NA</td>
                            <td>@studname123</td>
                            <td>NA</td>
                            <td>@studname123</td>
                            <td>NA</td>
                            <td>NA</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>21r01aXXXX</td>
                            <td>cmrit25_21r01aXXXX</td>
                            <td>NA</td>
                            <td>@studname123</td>
                            <td>NA</td>
                            <td>NA</td>
                            <td>@studname123</td>
                            <td>NA</td>
                            <td>@studname123</td>
                            <td>NA</td>
                            <td>@studname123</td>
                            <td>NA</td>
                            <td>NA</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>21r01aXXXX</td>
                            <td>cmrit25_21r01aXXXX</td>
                            <td>NA</td>
                            <td>@studname123</td>
                            <td>NA</td>
                            <td>NA</td>
                            <td>@studname123</td>
                            <td>NA</td>
                            <td>@studname123</td>
                            <td>NA</td>
                            <td>@studname123</td>
                            <td>NA</td>
                            <td>NA</td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td>21r01aXXXX</td>
                            <td>cmrit25_21r01aXXXX</td>
                            <td>NA</td>
                            <td>@studname123</td>
                            <td>NA</td>
                            <td>NA</td>
                            <td>@studname123</td>
                            <td>NA</td>
                            <td>@studname123</td>
                            <td>NA</td>
                            <td>@studname123</td>
                            <td>NA</td>
                            <td>NA</td>
                        </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td>21r01aXXXX</td>
                            <td>cmrit25_21r01aXXXX</td>
                            <td>NA</td>
                            <td>@studname123</td>
                            <td>NA</td>
                            <td>NA</td>
                            <td>@studname123</td>
                            <td>NA</td>
                            <td>@studname123</td>
                            <td>NA</td>
                            <td>@studname123</td>
                            <td>NA</td>
                            <td>NA</td>
                        </tr>
                        <tr>
                            <th scope="row">8</th>
                            <td>21r01aXXXX</td>
                            <td>cmrit25_21r01aXXXX</td>
                            <td>NA</td>
                            <td>@studname123</td>
                            <td>NA</td>
                            <td>NA</td>
                            <td>@studname123</td>
                            <td>NA</td>
                            <td>@studname123</td>
                            <td>NA</td>
                            <td>@studname123</td>
                            <td>NA</td>
                            <td>NA</td>
                        </tr>
                        <tr>
                            <th scope="row">9</th>
                            <td>21r01aXXXX</td>
                            <td>cmrit25_21r01aXXXX</td>
                            <td>NA</td>
                            <td>@studname123</td>
                            <td>NA</td>
                            <td>NA</td>
                            <td>@studname123</td>
                            <td>NA</td>
                            <td>@studname123</td>
                            <td>NA</td>
                            <td>@studname123</td>
                            <td>NA</td>
                            <td>NA</td>
                        </tr>
                        <tr>
                            <th scope="row">10</th>
                            <td>21r01aXXXX</td>
                            <td>cmrit25_21r01aXXXX</td>
                            <td>NA</td>
                            <td>@studname123</td>
                            <td>NA</td>
                            <td>NA</td>
                            <td>@studname123</td>
                            <td>NA</td>
                            <td>@studname123</td>
                            <td>NA</td>
                            <td>@studname123</td>
                            <td>NA</td>
                            <td>NA</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </>
    )
}
